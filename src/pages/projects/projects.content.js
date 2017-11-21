import etude from './etude/desc';
import beact from './beact/desc';
import transperception from './transperception/desc';
import vtbb from './vtbb/desc';
import avexp from './avexp/desc';
import beatmap from './beatmap/desc';
import sta from './sta/desc';
import whip from './whipwhip/desc';
import trail from './trail/desc';

/**
 * @type {Array}
 * {
 * 		title: this has to be the same as the markdown file to match the link)
 * 		content: short descriptoin)
 * 		links: [{
 * 			name,
 * 			url,
 * 		}],
 *    img: thumbnail image for the project
 * }
 */
export default [
	etude,
	beact,
	whip,
	vtbb,
	beatmap,
	transperception,
	avexp,
	sta,
	trail,
];
