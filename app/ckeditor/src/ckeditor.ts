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

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Base64UploadAdapter,
		Bold,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Image,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Link,
		List,
		ListProperties,
		Paragraph,
		RemoveFormat,
		Strikethrough,
		Table,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'bold',
				'underline',
				'strikethrough',
				'fontFamily',
				'fontSize',
				'fontColor',
				'fontBackgroundColor',
				'alignment',
				'removeFormat',
				'|',
				'bulletedList',
				'numberedList',
				'|',
				'link',
				'imageUpload'
			]
		},
		language: 'ja',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		}
	};
}

export default Editor;
