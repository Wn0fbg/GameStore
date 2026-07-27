import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "blocks-gamestore")}>
					
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{__("Blocks Gamestore – hello from the editor!", "blocks-gamestore")}
			</div>
		</>
	);
}
