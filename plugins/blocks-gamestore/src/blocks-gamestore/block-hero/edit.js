import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";
import { Button } from "@wordpress/components";

const SlideItem = ({ index, slide, onImageChange, onRemove }) => {
	return (
		<div className="slide-item">
			<div className="slide-item-image">
				<p>Light Version Logo</p>
				{slide.lightImage && <img src={slide.lightImage} alt="Slide image" />}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "lightImage")}
					onSelectURL={(url) => onImageChange(url, index, "lightImage")}
					labels={{
						title: "Slide Light Image",
						instructions: "Upload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<div className="slide-item-image">
				<p>Dark Version Logo</p>
				{slide.darkImage && <img src={slide.darkImage} alt="Slide image" />}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "darkImage")}
					onSelectURL={(url) => onImageChange(url, index, "darkImage")}
					labels={{
						title: "Slide Dark Image",
						instructions: "Upload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<Button
				className="components-button is-desctructive"
				onClick={() => onRemove(index)}
			>
				Remove
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { title, description, link, linkAnchor, video, image, isVideo } =
		attributes;
	const [isVideoUpload, setIsVideoUpload] = useState(isVideo);
	const [slides, setSlides] = useState([attributes.slides || []]);

	const onSlideChange = (updatedSlide, index) => {
		const updatedSlides = [...slides];
		updatedSlides[index] = updatedSlide;
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		setSlides([...slides, { image: "" }]);
	};

	const removeSlide = (index) => {
		const updatedSlides = [...slides];
		updatedSlides.splice(index, 1);
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const handleImageChange = (url, index) => {
		const updatedSlide = { ...slides[index], image: url };
		onSlideChange(updatedSlide, index);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<TextControl
						label="Description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<TextControl
						label="Button URL"
						value={link}
						onChange={(link) => setAttributes({ link })}
					/>
					<TextControl
						label="Button Text"
						value={linkAnchor}
						onChange={(linkAnchor) => setAttributes({ linkAnchor })}
					/>
					<ToggleControl
						label="Use Video instead of Image"
						checked={isVideoUpload}
						onChange={(value) => {
							setIsVideoUpload(value);
							setAttributes({
								isVideo: value,
								video: value ? video : "",
								image: !value ? image : "",
							});
						}}
					/>
					<div style={{ marginTop: "10px" }}>
						{isVideoUpload && video && (
							<video controls muted style={{ maxWidth: "100%" }}>
								<source src={video} type="video/mp4" />
							</video>
						)}
						{!isVideoUpload && image && (
							<img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />
						)}
					</div>
					<MediaUpload
						onSelect={(media) => {
							if (isVideoUpload) {
								setAttributes({ video: media.url });
							} else {
								setAttributes({ image: media.url });
							}
						}}
						allowedTypes={isVideoUpload ? ["video"] : ["image"]}
						render={({ open }) => (
							<button
								className="components-button is-secondary"
								style={{ marginTop: "10px" }}
								onClick={open}
							>
								{isVideoUpload ? "Upload Video" : "Upload Image"}
							</button>
						)}
					/>
				</PanelBody>
				<PanelBody title="Hero Slider">
					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							index={index}
							slide={slide}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}
				</PanelBody>
				<Button className="components-button is-primary" onClick={addSlide}>
					Add Slide
				</Button>
			</InspectorControls>
			<div {...useBlockProps()}>
				{video && (
					<video
						className="video-bg"
						loop="loop"
						autoPlay=""
						muted
						playsInline
						width="100%"
						height="100%"
					>
						<source className="source-element" src={video} type="video/mp4" />
					</video>
				)}
				{image && <img className="image-bg" src={image} alt="background" />}
				<div className="hero-mask"></div>
				<div className="hero-content">
					<RichText
						tagName="h1"
						className="hero-title"
						value={title}
						onChange={(title) => setAttributes({ title })}
						placeholder="Enter title..."
					/>
					<RichText
						tagName="p"
						className="hero-description"
						value={description}
						onChange={(description) => setAttributes({ description })}
						placeholder="Enter description..."
					/>
					{linkAnchor && (
						<a href={link} className="hero-button">
							{linkAnchor}
						</a>
					)}
				</div>
			</div>
		</>
	);
}
