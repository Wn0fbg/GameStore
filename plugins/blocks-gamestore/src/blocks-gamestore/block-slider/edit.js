import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import "./editor.scss";

const SlideItem = ({ index, slide, onImageChange, onRemove }) => (
	<div className="slide-item">
		<MediaPlaceholder
			icon="format-image"
			onSelect={(media) =>
				onImageChange(media?.url || media?.sizes?.full?.url || "", index)
			}
			onSelectURL={(url) => onImageChange(url, index)}
			labels={{ title: "Slide Image", instructions: "Upload an image" }}
			accept="image/*"
			allowedTypes={["image"]}
			multiple={false}
			value={slide.image ? { url: slide.image } : undefined}
		/>
		{slide.image && (
			<img src={slide.image} alt={`Slide ${index + 1}`} className="bg-image" />
		)}
		<Button isDestructive onClick={() => onRemove(index)}>
			Remove
		</Button>
	</div>
);

export default function Edit({ attributes, setAttributes }) {
	const { title, description, slides: initialSlides } = attributes;
	const [slides, setSlides] = useState(initialSlides || []);

	useEffect(() => setSlides(initialSlides || []), [initialSlides]);

	const updateSlides = (newSlides) => {
		setSlides(newSlides);
		setAttributes({ slides: newSlides });
	};

	const addSlide = () => updateSlides([...slides, { image: "" }]);
	const removeSlide = (index) =>
		updateSlides(slides.filter((_, i) => i !== index));
	const handleImageChange = (url, index) => {
		const newSlides = [...slides];
		newSlides[index] = { ...newSlides[index], image: url };
		updateSlides(newSlides);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
					<TextControl
						label="Title"
						value={title || ""}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label="Description"
						value={description || ""}
						onChange={(val) => setAttributes({ description: val })}
					/>
				</PanelBody>
				<PanelBody title="Slider Images">
					{slides.map((slide, idx) => (
						<SlideItem
							key={idx}
							index={idx}
							slide={slide}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}
					<Button isPrimary onClick={addSlide} style={{ marginTop: "10px" }}>
						Add Slide
					</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({ className: "alignfull" })}>
				<div className="slider-inner-content">
					<RichText
						tagName="h2"
						className="slider-title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
						placeholder="Title..."
					/>
					<RichText
						tagName="p"
						className="slider-description"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Description..."
					/>
					{slides.length > 0 && (
						<div className="slider-media">
							<div className="swiper-wrapper">
								{slides.map(
									(slide, idx) =>
										slide.image && (
											<div className="swiper-slide" key={idx}>
												<img
													src={slide.image}
													alt={`Slide ${idx + 1}`}
													className="blur-image"
												/>
												<img
													src={slide.image}
													alt={`Slide ${idx + 1}`}
													className="original-image"
												/>
											</div>
										),
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
