import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace"; // @ts-ignore
import MathType from "@wiris/mathtype-ckeditor5/src/plugin";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  List,
  Paragraph,
  Table,
  TableToolbar,
  Base64UploadAdapter,
  Alignment,
  Subscript,
  Superscript,
  FontSize,
  FontFamily,
  RemoveFormat,
  HorizontalLine,
  FontColor,
  FontBackgroundColor,
  SpecialCharactersEssentials, // @ts-ignore
  SpecialCharacters,
  FindAndReplace,
  MathType,
];

ClassicEditor.defaultConfig = {
  toolbar: [
    "removeFormat",
    "|",
    "heading",
    "|",
    "fontSize",
    "fontFamily",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "bold",
    "italic",
    "underline",
    "strike",
    "subscript",
    "superscript",
    "|",
    "bulletedList",
    "numberedList",
    "|",
    "alignment",
    "outdent",
    "indent",
    "|",
    "MathType",
    "ChemType",
    "insertTable",
    "uploadImage",
    "|",
    "undo",
    "redo",
    "findAndReplace",
  ],
  image: {
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};
