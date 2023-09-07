/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Image, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Table } from '@ckeditor/ckeditor5-table';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof Base64UploadAdapter | typeof Bold | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Image | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Link | typeof List | typeof ListProperties | typeof Paragraph | typeof RemoveFormat | typeof Strikethrough | typeof Table | typeof Underline)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
    };
}
export default Editor;
