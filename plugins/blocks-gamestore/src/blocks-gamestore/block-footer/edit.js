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
import { __experimentalDivider as Divider } from "@wordpress/components";
import "./editor.scss";

const LinkRepeater = ({ links, setLinks }) => {
	const addLink = () => {
		setLinks([...links, { url: "", anchor: "" }]);
	};

	const removeLink = (index) => {
		const updatedLinks = links.filter((_, i) => i !== index);
		setLinks(updatedLinks);
	};

	const updatedLink = (index, key, value) => {
		const updatedLinks = [...links];
		updatedLinks[index][key] = value;
		setLinks(updatedLinks);
	};

	return (
		<>
			<div className="link-repeater">
				<p>Manage Links</p>
				{links.map((link, index) => (
					<div key={index} className="link-repeater-item">
						<br />
						<TextControl
							label="URL"
							value={link.url}
							onChange={(value) => updatedLink(index, "url", value)}
							placeholder="https://example.com"
						/>
						<TextControl
							label="Anchor Text"
							value={link.anchor}
							onChange={(value) => updatedLink(index, "anchor", value)}
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
					Add Link
				</Button>
			</div>
		</>
	);
};

const LogosRepeater = ({ logos, setLogos }) => {
	const addLogo = () => {
		setLogos([...logos, { url: "", image: "", imageDark: "" }]);
	};

	const removeLogo = (index) => {
		const updatedLogos = logos.filter((_, i) => i !== index);
		setLogos(updatedLogos);
	};

	const updatedLogo = (index, key, value) => {
		const updatedLogos = [...logos];
		updatedLogos[index][key] = value;
		setLogos(updatedLogos);
	};

	return (
		<>
			<div className="logo-repeater">
				<p>Manage Logos</p>
				{logos.map((logo, index) => (
					<div key={index} className="logo-repeater-item">
						<br />
						<TextControl
							label="URL"
							value={logo.url}
							onChange={(value) => updatedLogo(index, "url", value)}
							placeholder="https://example.com"
						/>
						{logo.image && <img src={logo.image} alt="Logo" />}
						<MediaPlaceholder
							icon="format-image"
							labels={{ title: "Logo" }}
							onSelect={(media) => updatedLogo(index, "image", media.url)}
							accept="image/*"
							allowedTypes={["image"]}
						/>
						<br />
						{logo.imageDark && <img src={logo.imageDark} alt="Logo" />}
						<MediaPlaceholder
							icon="format-image"
							labels={{ title: "Dark variant Logo" }}
							onSelect={(media) => updatedLogo(index, "imageDark", media.url)}
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
					Add Logo
				</Button>
			</div>
		</>
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
						label="Copyrights"
						value={copyrights}
						onChange={(value) => setAttributes({ copyrights: value })}
					/>
					<Divider margin={8} />
					<LinkRepeater links={links} setLinks={setLinks} />
					<Divider margin={8} />
					<LogosRepeater logos={logos} setLogos={setLogos} />
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wrapper inner-footer">
					<InnerBlocks />
					<div className="footer-line"></div>
					<div className="footer-bottom">
						<div className="left-part">
							{copyrights && <p>{copyrights}</p>}
							{logos && (
								<div className="footer-logos">
									{logos.map((logo, index) => (
										<a
											key={index}
											href={logo.url}
											target="_blank"
											rel="nofollow noreferrer"
										>
											<img src={logo.image} className="light-logo" alt="Logo" />
											<img
												src={logo.imageDark}
												className="dark-logo"
												alt="Dark Variant Logo"
											/>
										</a>
									))}
								</div>
							)}
						</div>
						<div className="right-part">
							{links &&
								links.map((link, index) => (
									<a key={index} href={link.url}>
										{link.anchor}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
