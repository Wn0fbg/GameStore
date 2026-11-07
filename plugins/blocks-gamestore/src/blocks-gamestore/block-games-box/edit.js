import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { count, title, product_category } = attributes;

	const { categories, isLoading } = useSelect((select) => {
		const query = { per_page: 100, orderby: "name", order: "asc" };
		return {
			categories: select(coreStore).getEntityRecords(
				"taxonomy",
				"product_cat",
				query,
			),
			isLoading: select(coreStore).isResolving("getEntityRecords", [
				"taxonomy",
				"product_cat",
				query,
			]),
		};
	}, []);

	// ВАЖНО: пустая опция "" — это "Auto", иначе SelectControl покажет первую
	const categoryOptions = [
		...(categories || []).map((cat) => ({
			label: cat.name,
			value: cat.slug,
		})),
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Setting", "blocks-gamestore")}>
					<TextControl
						label={__("Count", "blocks-gamestore")}
						value={count}
						onChange={(val) => setAttributes({ count: parseInt(val, 10) || 0 })}
					/>
					<TextControl
						label={__("Title", "blocks-gamestore")}
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					{isLoading ? (
						<Spinner />
					) : (
						<SelectControl
							label={__("Category", "blocks-gamestore")}
							value={product_category}
							options={categoryOptions}
							onChange={(value) => setAttributes({ product_category: value })}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>Games Box Filter</div>
		</>
	);
}
