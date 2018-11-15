const fs = require('fs');
const path = require('path')
const tesseract = require('tesseract.js');
const gm = require('gm').subClass({ imageMagick: true })
const filePath = path.resolve(__dirname, 'result.jpg')


async function getCode(imgName) {
	imgName = imgName || path.resolve(__dirname, 'code.jpg');
	try {
		let newImg = await processImg(imgName)
		let text = await recognizer(newImg)
		return text
	} catch (error) {
		throw error
	}
}

function processImg(imgName) {
	return new Promise((resolve, reject) => {
		gm(imgName)
			.threshold('20%')
			.colorspace('gray')
			.normalize()
			.write(filePath, function (err) {
				if (err) reject(err);
				resolve(filePath);
			});
	});
}

function recognizer(imageNameProcessed) {
	return new Promise((resolve, reject) => {
		tesseract.recognize(imageNameProcessed, {
			classify_bln_numeric_mode: 1
		})
		.then(result => {
			resolve(result.text.trim())
		})
		.catch(error => {
			reject(error)
		})
	})
}

module.exports = {
	getCode: getCode
}