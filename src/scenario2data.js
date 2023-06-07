import scenario2f1img from './scenario2f1.jpg';
import scenario2f2img from './scenario2f2.jpg';

export const scenario2 = [
	{
		floor: 1,
		scenario: 2,
		img: scenario2f1img,
		sensors: [
			{
				id: 11,
				activated: false,
				position: {
					top: 233,
					right: 326,
					bottom: 219,
					left: 10,
				},
			},
			{
				id: 12,
				activated: false,
				position: {
					top: 303,
					right: 291,
					bottom: 0,
					left: 284,
				},
			},
			{
				id: 13,
				activated: false,
				position: {
					top: 14,
					right: 0,
					bottom: 0,
					left: 306,
				},
			},
		],
		exitPathways: [
			{
				id: 11,
				crowded: false,
				position: {
					top: 267,
					right: 480,
					bottom: 410,
					left: 10,
				},
			},
			{
				id: 12,
				crowded: false,
				position: {
					top: 389,
					right: 13,
					bottom: 0,
					left: 8,
				},
			},
			{
				id: 13,
				crowded: false,
				position: {
					top: 23,
					right: 27,
					bottom: 5,
					left: 489,
				},
			},
		],
		lamps: [
			{
				id: 11,
				position: {
					top: 229,
					right: 498,
					bottom: 287,
					left: 0,
				},
			},
			{
				id: 11,
				position: {
					top: 228,
					right: 422,
					bottom: 300,
					left: 69,
				},
			},
			{
				id: 11,
				position: {
					top: 19,
					right: 258,
					bottom: 68,
					left: 66,
				},
			},
			{
				id: 11,
				position: {
					top: 185,
					right: 190,
					bottom: 68,
					left: 0,
				},
			},
			{
				id: 12,
				position: {
					top: 438,
					right: 308,
					bottom: 49,
					left: 174,
				},
			},
			{
				id: 12,
				position: {
					top: 140,
					right: 0,
					bottom: 0,
					left: -134,
				},
			},
			{
				id: 12,
				position: {
					top: 440,
					right: -36,
					bottom: 49,
					left: 85,
				},
			},
			{
				id: 12,
				position: {
					top: 138,
					right: -36,
					bottom: 0,
					left: 85,
				},
			},
			{
				id: 13,
				position: {
					top: -48,
					right: -138,
					bottom: 0,
					left: 0,
				},
			},
			{
				id: 13,
				position: {
					top: 116,
					right: -76,
					bottom: 0,
					left: 65,
				},
			},
			{
				id: 13,
				position: {
					top: -64,
					right: -342,
					bottom: 0,
					left: 0,
				},
			},
			{
				id: 13,
				position: {
					top: -61,
					right: -425,
					bottom: 0,
					left: 65,
				},
			},
		],
		arrowScreens: [
			{
				id: 1,
				position: {
					top: 11,
					right: 14,
					bottom: -14,
					left: 0,
				},
				angle: 0,
				activated: true,
			},
			{
				id: 2,
				position: {
					top: 38,
					right: 13,
					bottom: 0,
					left: 12,
				},
				angle: 90,
				activated: false,
			},
		],
	},
	{
		floor: 2,
		scenario: 2,
		img: scenario2f2img,
		sensors: [
			{
				id: 21,
				activated: false,
				disabled: false,
				position: {
					top: 216,
					right: 364,
					bottom: 219,
					left: 10,
				},
			},
			{
				id: 22,
				activated: false,
				disabled: false,
				position: {
					top: -3,
					right: -59,
					bottom: 0,
					left: 284,
				},
			},
		],
		exitPathways: [
			{
				id: 21,
				crowded: false,
				position: {
					top: -144,
					right: 481,
					bottom: 78,
					left: 16,
				},
			},
			{
				id: 22,
				crowded: false,
				position: {
					top: -217,
					right: 35,
					bottom: 5,
					left: 489,
				},
			},
		],
		lamps: [
			{
				id: 21,
				position: {
					top: 231,
					right: 498,
					bottom: 410,
					left: 0,
				},
			},
			{
				id: 21,
				position: {
					top: 230,
					right: 382,
					bottom: 410,
					left: 66,
				},
			},
			{
				id: 21,
				position: {
					top: 24,
					right: 182,
					bottom: 68,
					left: 66,
				},
			},
			{
				id: 21,
				position: {
					top: 106,
					right: 115,
					bottom: 68,
					left: 0,
				},
			},
			{
				id: 22,
				position: {
					top: -5,
					right: 7,
					bottom: 49,
					left: 496,
				},
			},
			{
				id: 22,
				position: {
					top: -56,
					right: 289,
					bottom: 0,
					left: 449,
				},
			},
			{
				id: 22,
				position: {
					top: 4,
					right: -23,
					bottom: 49,
					left: 85,
				},
			},
			{
				id: 22,
				position: {
					top: 37,
					right: -23,
					bottom: 0,
					left: 85,
				},
			},
		],
		arrowScreens: [
			{
				id: 1,
				position: {
					top: -16,
					right: 5,
					bottom: -14,
					left: 0,
				},
				angle: 0,
				activated: true,
			},
		],
	},
];
