import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import "./editor.scss";

const LinkRepeater = ({ links, setLinks }) => {
	const addLink = () => {
		setLinks([...links, { url: "", anchor: "" }]);
	};

	const removeLink = (index) => {
		const updatedLinks = links.filter((_, i) => i !== index);
		setLinks(updatedLinks);
	};

	const updateLink = (index, key, value) => {
		const updatedLinks = [...links];
		updatedLinks[index][key] = value;
		setLinks(updatedLinks);
	};

	return (
		<div className="link-repeater">
			<h4>Manage Links</h4>
			{links.map((link, index) => (
				<div key={index} className="link-repeater-item">
					<br />
					<TextControl
						label="URL"
						value={link.url}
						onChange={(value) => updateLink(index, "url", value)}
						placeholder="https://example.com"
					/>
					<TextControl
						label="Anchor Text"
						value={link.anchor}
						onChange={(value) => updateLink(index, "anchor", value)}
						placeholder="Link text"
					/>
					<Button
						variant="secondary"
						onClick={() => removeLink(index)}
						className="remove-link-button"
					>
						Remove Link
					</Button>
				</div>
			))}
			<br />
			<Button variant="primary" onClick={addLink} className="add-link-button">
				Add New Link
			</Button>
		</div>
	);
};

const LogoRepeater = ({ logos, setLogos }) => {
	const addLogo = () => {
		setLogos([...logos, { url: "", image: "" }]);
	};

	const removeLogo = (index) => {
		const updatedLogos = logos.filter((_, i) => i !== index);
		setLogos(updatedLogos);
	};

	const updateLogo = (index, key, value) => {
		const updatedLogos = [...links];
		updatedLogos[index][key] = value;
		setLogos(updatedLogos);
	};

	return (
		<div className="logo-repeater">
			<h4>Manage Logos</h4>
			{logos.map((logo, index) => (
				<div key={index} className="logo-repeater-item">
					<br />
					<TextControl
						label="URL"
						value={logo.url}
						onChange={(value) => updateLogo(index, "url", value)}
						placeholder="https://example.com"
					/>
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Logo" }}
						onSelect={(media) => updateLogo(index, "image", media.url)}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<br />
					<Button
						variant="secondary"
						onClick={() => removeLogo(index)}
						className="remove-logo-button"
					>
						Remove Logo
					</Button>
				</div>
			))}
			<br />
			<Button variant="primary" onClick={addLogo} className="add-logo-button">
				Add New Logo
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { copyrights, logos = [], links = [] } = attributes;
	const setLinks = (newLinks) => setAttributes({ links: newLinks });
	const setLogos = (newLogos) => setAttributes({ logos: newLogos });

	return (
		<>
			<InspectorControls>
				<PanelBody title="Footer Settings">
					<TextareaControl
						label="copyrights"
						value={copyrights}
						onChange={(value) => setAttributes({ memberLink: value })}
					/>
					<br />
					<hr />
					<LinkRepeater links={links} setLinks={setLinks} />
					<br />
					<hr />
					<LogoRepeater logos={logos} setLogos={setLogos} />
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="inner-footer">
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
