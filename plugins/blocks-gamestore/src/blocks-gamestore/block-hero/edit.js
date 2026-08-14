import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

const SlideItem = ({ index, slide, onImageChange, onRemove }) => {
	return (
		<div className="slide-item">
			<div className="slide-item-image">
				<p>Light Version Logo</p>
				{slide.lightImage && (
					<div className="image-box">
						<img src={slide.lightImage} alt="Slide Image" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "lightImage")}
					onSelectURL={(url) => onImageChange(url, index, "lightImage")}
					labels={{
						title: "Slide Light Image",
						instructions: "Ipload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<div className="slide-item-image">
				<p>Dark Version Logo</p>
				{slide.darkImage && (
					<div className="image-box">
						<img src={slide.darkImage} alt="Slide Image" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "darkImage")}
					onSelectURL={(url) => onImageChange(url, index, "darkImage")}
					labels={{
						title: "Slide Dark Image",
						instructions: "Ipload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<Button
				className="components-button is-destructive"
				onClick={() => onRemove(index)}
			>
				Remove slide
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		link,
		linkAnchor,
		video,
		image,
		isVideo,
		slides: initialSlides,
	} = attributes;
	const [isVideoUpload, setIsVideoUpload] = useState(isVideo);
	const [slides, setSlides] = useState(initialSlides || []);

	const onSliderChange = (updatedSlide, index) => {
		const updatedSlides = [...slides];
		updatedSlides[index] = updatedSlide;
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		const newSlide = { lightImage: "", darkImage: "" };
		const updateSlides = [...slides, newSlide];
		setSlides(updateSlides);
		setAttributes({ slides: updateSlides });
	};

	const removeSlide = (index) => {
		const updatedSlides = [...slides];
		updatedSlides.splice(index, 1);
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const handleImageChange = (url, index, imageType) => {
		const updatedSlide = { ...slides[index], [imageType]: url };
		onSliderChange(updatedSlide, index);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
					<TextControl
						label="Button URL"
						value={link}
						onChange={(val) => setAttributes({ link: val })}
					/>
					<TextControl
						label="Button Anchor"
						value={linkAnchor}
						onChange={(val) => setAttributes({ linkAnchor: val })}
					/>
					<ToggleControl
						label="Upload Video"
						checked={isVideoUpload}
						onChange={(value) => {
							setIsVideoUpload(value);
							setAttributes({ isVideo: value, video: "", image: "" });
						}}
					/>
					{isVideoUpload
						? video && (
								<video controls muted>
									<source src={video} type="video/mp4" />
								</video>
						  )
						: image && (
								<img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />
						  )}
					<MediaUpload
						onSelect={(media) => {
							if (isVideoUpload) {
								setAttributes({ video: media.url });
							} else {
								setAttributes({ image: media.url });
							}
						}}
						type={isVideoUpload ? ["video"] : ["image"]}
						render={({ open }) => (
							<button className="components-button is-secondary" onClick={open}>
								{isVideoUpload ? "Upload Video" : "Upload Image"}
							</button>
						)}
					/>
				</PanelBody>
				<PanelBody title="Hero Slider">
					{slides.map((slide, index) => (
						<>
							<SlideItem
								key={index}
								index={index}
								slide={slide}
								onImageChange={handleImageChange}
								onRemove={removeSlide}
							/>
						</>
					))}
					<Button className="components-button is-primary" onClick={addSlide}>
						Add Slide
					</Button>
				</PanelBody>
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
				{image && <img className="image-bg" src={image} alt="Background" />}
				<div className="hero-mask"></div>
				<div className="hero-content">
					<RichText
						tagName="h1"
						className="hero-title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<RichText
						tagName="p"
						className="hero-description"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
					<a href={link} className="hero-button shadow">
						{linkAnchor}
					</a>
				</div>
				<div className="hero-slider">
					<div className="slider-container">
						<div className="swiper-wrapper">
							{slides.map((slide, index) => (
								<div className="swiper-slide slide-item" key={index}>
									<img
										src={slide.lightImage}
										alt="Light Logo"
										className="light-logo"
									/>
									<img
										src={slide.darkImage}
										alt="Dark Logo"
										className="dark-logo"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
