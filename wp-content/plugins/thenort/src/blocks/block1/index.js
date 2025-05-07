import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";

registerBlockType(metadata.name, {
  title: metadata.title,
  edit: () => <div>Edit Block 1</div>,
  save: () => <div>Save Block 1</div>,
});
