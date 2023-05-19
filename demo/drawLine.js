let hGap = 70;
let wGap = 70;
const lineMapY = {};
const lineMapX = {};

export function toLeft(ctx, cbcr,pid, id, p, s) {
	// to left
	let x = p.left;
	let ex = s.right;
	let y = p.top / 2 + p.bottom / 2;
	let [, , ey] = getPointByY([p.bottom, p.top], pid,id, x, ex, y, y, true, 7);
	lineToArrow(ctx, cbcr, pid,id, x, ey, ex, ey, {position: 'l'});
}

export function toLeftFar(ctx, cbcr, pid, id, p, s) {
	toRightFar(ctx, cbcr,pid, id, p, s)
}

export function toRight(ctx, cbcr, pid,id, p, s) {
	let x = p.right;
	let ex = s.left;
	let y = p.top / 2 + p.bottom / 2;
	let [, , ey] = getPointByY([p.bottom, p.top],pid, id, x, ex, p.top, y, true, 7);
	lineToArrow(ctx, cbcr, pid,id, x, ey, ex, ey, {position: 'r'});
}

export function toRightFar(ctx, cbcr,pid, id, p, s) {
	let x = p.right / 2 + p.left / 2;
	let ex = s.left / 2 + s.right / 2;
	let y = p.top - hGap / 2 + 7;

	let [, , y2] = getPointByY([p.bottom, p.top],pid, id, x, ex, p.top, y);
	let [x1] = getPointByX([p.right - 7, p.left + 7],pid, id, x, p.top, y);
	lineTo(ctx, cbcr,pid, id, x1, p.top, x1, y2);
	let [x2] = getPointByX([s.right, s.left],pid, id, ex, y2, s.top);
	lineTo(ctx, cbcr,pid, id, x1, y2, x2, y2);
	lineToArrow(ctx, cbcr,pid, id, x2, y2, x2, s.top, {position: 'b'});
}

export function toTop(ctx, cbcr,pid, id, p, s) {
	let x = p.left / 2 + p.right / 2;
	let y = p.top;
	let ey = s.bottom;
	let [ex] = getPointByX([p.right, p.left],pid, id, x, y, ey, 7);
	lineToArrow(ctx, cbcr, pid,id, ex, y, ex, ey, {position: 't'});

}

export function toTopFar(ctx, cbcr,pid, id, p, s) {
	let x = p.right + wGap / 2;
	let y = p.top / 2 + p.bottom / 2;
	let ey = s.top / 2 + s.bottom / 2;
	let [x1] = getPointByX([p.right+wGap, p.right],pid, id, x, y, ey);
	let [, , y3] = getPointByY([p.bottom, p.top],pid, id, p.right, x, y, y, true, 7);

	lineTo(ctx, cbcr,pid, id, p.right, y3, x1, y3);
	let [, , y2] = getPointByY([s.bottom, ey], pid,id, x1, s.right, s.top, ey, true, 7);

	lineTo(ctx, cbcr, pid,id, x1, y3, x1, y2);
	lineToArrow(ctx, cbcr,pid, id, x1, y2, s.right, y2, {position: 'l'});

}

export function toDown(ctx, cbcr,pid, id, p, s) {
	let x = p.left / 2 + p.right / 2;
	let y = p.bottom;
	let ey = s.top;
	let [ex] = getPointByX([p.right, p.left],pid, id, x, y, ey);
	lineToArrow(ctx, cbcr,pid, id, ex, y, ex, ey, {position: 'b'});
}

export function toDownFar(ctx, cbcr,pid, id, p, s) {
	let x = p.left - wGap / 2;
	let y = p.top / 2 + p.bottom / 2;
	let ey = s.top / 2 + s.bottom / 2;
	let [x1] = getPointByX([p.left, p.left - wGap],pid, id, x, y, ey);
	let [, , y3] = getPointByY([p.bottom, p.top],pid, id, p.left, x, y, y, true, 7);

	lineTo(ctx, cbcr,pid, id, p.left, y3, x1, y3);
	let [, , y2] = getPointByY([s.bottom, ey], pid,id, x1, s.left, s.top, ey, true, 7);

	lineTo(ctx, cbcr, pid,id, x1, y3, x1, y2);
	lineToArrow(ctx, cbcr,pid, id, x1, y2, s.left, y2, {position: 'r'});
}

export function toTopLeft(ctx, cbcr,pid, id, p, s) {
	let x = p.left / 2 + p.right / 2;
	let ey = p.top - hGap / 2;
	let ex = s.right + wGap / 2;
	let eey = s.top / 2 + s.bottom / 2;

	let [, , y2] = getPointByY([p.top, p.top - hGap], pid,id, x, ex, p.top, ey, false, 5);
	let [x1] = getPointByX([p.right, p.left],pid, id, x, p.top, y2)

	lineTo(ctx, cbcr,pid, id, x1, p.top, x1, y2);
	let [x2] = getPointByX([s.right + wGap - 7, s.right + 7], pid,id, ex, y2, eey)

	lineTo(ctx, cbcr,pid, id, x1, y2, x2, y2);

	let [, , y3] = getPointByY([s.bottom, eey],pid, id, ex, s.right, p.top, eey, true, 7);

	lineTo(ctx, cbcr,pid, id, x2, y2, x2, y3);
	lineToArrow(ctx, cbcr,pid, id, x2, y3, s.right, y3, {position: 'l'});

}

export function toTopRight(ctx, cbcr,pid, id, p, s) {

	let x = p.left / 2 + p.right / 2;
	let y = p.top - 7;
	let ey = s.bottom + 20;
	let ex = s.left / 2 + s.right / 2;
	let ex1 = s.left - wGap + 7;

	let [x1] = getPointByX([p.right, p.left], pid,id, x, p.top, y)
	let [, , y1] = getPointByY([p.top - hGap + 7, p.top - 7],pid, id, x1, ex1, p.top, y, true, 7);

	lineTo(ctx, cbcr, pid,id, x1, p.top, x1, y1);
	let [x2] = getPointByX([s.left - 7, ex1],pid, id, ex1, y1, ey, 5);
	lineTo(ctx, cbcr, pid,id, x1, y1, x2, y1);
	let [, , y2] = getPointByY([s.bottom + hGap - 7, s.bottom + 7], pid,id, x2, ex, y1, ey);
	lineTo(ctx, cbcr,pid, id, x2, y1, x2, y2);
	let [x3] = getPointByX([s.right - 7, s.left + 7],pid, id, ex, y2, s.bottom);
	lineTo(ctx, cbcr,pid, id, x2, y2, x3, y2);
	lineToArrow(ctx, cbcr,pid, id, x3, y2, x3, s.bottom, {position: 't'});

}

export function toDownLeft(ctx, cbcr, pid, id, p, s) {
	let x = p.left / 2 + p.right / 2;
	let y = p.bottom + 5;//p.bottom + hGap/2;
	let ex = s.right + wGap / 2;
	let ey = s.top / 2 + s.bottom / 2;

	let [x4] = getPointByX([p.right, p.left], pid, id, x, y, p.bottom, 7);
	let [, , y2] = getPointByY([p.bottom + hGap / 2, p.bottom], pid, id, x, ex, p.bottom, y, true, 5);
	lineTo(ctx, cbcr, pid, id, x4, p.bottom, x4, y2);

	let [x3] = getPointByX([s.right + wGap, s.right], pid, id, ex, y, ey);
	lineTo(ctx, cbcr, pid, id, x4, y2, x3, y2);

	let [, , y3] = getPointByY([ey, s.top], pid, id, x3, s.right, s.top, ey, true, 7);

	lineTo(ctx, cbcr, pid, id, x3, y2, x3, y3);
	lineToArrow(ctx, cbcr, pid, id, x3, y3, s.right, y3, {position: 'l'});

}

export function toDownRight(ctx, cbcr, pid, id, p, s) {
	let x = p.left / 2 + p.right / 2;
	let y = p.bottom + 5;//p.bottom + hGap/2;
	let ex = s.left - wGap / 2;
	let ey = s.top / 2 + s.bottom / 2;

	let [x4] = getPointByX([p.right, p.left], pid, id, x, y, p.bottom, 7);
	let [, , y2] = getPointByY([p.bottom + hGap, p.bottom], pid, id, x4, ex, p.bottom, y, true, 5);
	lineTo(ctx, cbcr, pid, id, x4, p.bottom, x4, y2);

	let [x3] = getPointByX([s.left + wGap, s.left], pid, id, ex, y, ey);
	lineTo(ctx, cbcr, pid, id, x4, y2, x3, y2);

	let [, , y3] = getPointByY([ey, s.top], pid, id, x3, s.left, s.top, ey, true, 7);

	lineTo(ctx, cbcr, pid, id, x3, y2, x3, y3);
	lineToArrow(ctx, cbcr, pid, id, x3, y3, s.left, y3, {position: 'r'});
}

export function lineTo(ctx, cbcr, pid, id, startX, startY, endX, endY, color = '#ff0000') {
	if (startX === endX) {
		if (!lineMapX[startX]) {
			lineMapX[startX] = [];
		}
		lineMapX[startX].push({id, pid, line: [startY, endY]});
	}
	if (startY === endY) {
		if (!lineMapY[startY]) {
			lineMapY[startY] = [];
		}
		lineMapY[startY].push({id, pid, line: [startX, endX]});
	}

	startX -= cbcr.left;
	endX -= cbcr.left;
	startY -= cbcr.top;
	endY -= cbcr.top;

	startX = Math.floor(startX);
	endX = Math.floor(endX);
	startY = Math.floor(startY);
	endY = Math.floor(endY);

	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineWidth = 2;
	ctx.lineTo(endX, endY);
	//ctx.closePath();
	ctx.strokeStyle = color
	ctx.stroke();
	ctx.closePath();
}

export function lineToArrow(ctx, cbcr, pid, id, startX, startY, endX, endY, opt) {
	let config = {
		color: '#ff0000',
		position: 'r'
	}
	Object.assign(config, opt)
	const {color, position} = config;
	if (startX === endX) {
		if (!lineMapX[startX]) {
			lineMapX[startX] = [];
		}
		lineMapX[startX].push({id, pid, line: [startY, endY]});
	}
	if (startY === endY) {
		if (!lineMapY[startY]) {
			lineMapY[startY] = [];
		}
		lineMapY[startY].push({id, pid, line: [startX, endX]});
	}
	startX -= cbcr.left;
	endX -= cbcr.left;
	startY -= cbcr.top;
	endY -= cbcr.top;

	startX = Math.floor(startX);
	endX = Math.floor(endX);
	startY = Math.floor(startY);
	endY = Math.floor(endY);

	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineWidth = 2;
	ctx.lineTo(endX, endY);
	//ctx.closePath();
	ctx.strokeStyle = color
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 1;
	if (position === 'r') {
		ctx.moveTo(endX, endY);
		ctx.lineTo(endX - 10, endY - 7);
		ctx.lineTo(endX - 10, endY + 7);
	} else if (position === 'b') {
		ctx.moveTo(endX, endY);
		ctx.lineTo(endX - 7, endY - 10);
		ctx.lineTo(endX + 7, endY - 10);
	} else if (position === 'l') {
		ctx.moveTo(endX, endY);
		ctx.lineTo(endX + 10, endY - 7);
		ctx.lineTo(endX + 10, endY + 7);
	} else if (position === 't') {
		ctx.moveTo(endX, endY);
		ctx.lineTo(endX - 7, endY + 10);
		ctx.lineTo(endX + 7, endY + 10);
	}

	ctx.closePath();
	ctx.fillStyle = color
	ctx.fill();

}

export function getPointByY([max, min], pid, id, x, ex, y, ey, isToBig = true, step = 3, selectToBig = true) {


	if (lineMapY[ey] && lineMapY[ey].length) {
		if (isToBig) {
			for (let temp = ey; temp < max; temp += step) {
				if (!lineMapY[temp]) {
					lineMapY[temp] = [];
				}

				if (!isInlineList(lineMapY[temp] || [], [x, ex, pid, id])) {
					return [x, y, temp];
				}
			}

			for (let temp = ey; temp > min; temp -= step) {
				if (!lineMapY[temp]) {
					lineMapY[temp] = [];
				}
				if (!isInlineList(lineMapY[temp] || [], [x, ex, pid, id])) {
					return [x, y, temp];
				}
			}

		} else {

			for (let temp = ey; temp > min; temp -= step) {
				if (!lineMapY[temp]) {
					lineMapY[temp] = [];
				}
				if (!isInlineList(lineMapY[temp] || [], [x, ex, pid, id])) {
					return [x, y, temp];
				}
			}

			for (let temp = ey; temp < max; temp += step) {
				if (!lineMapY[temp]) {
					lineMapY[temp] = [];
				}

				if (!isInlineList(lineMapY[temp] || [], [x, ex, pid, id])) {
					return [x, y, temp];
				}
			}

		}
		console.log('没有可用的链接点了')// todo 跌代
		return [x + step, y, ey]


	} else {
		return [x, y, ey]
	}

}

export function getPointByX([max, min], pid, id, ex, y, ey, step = 7) {

	if (lineMapX[ex]) {

		for (let temp = ex; temp < max; temp += step) {
			if (!lineMapX[temp]) {
				lineMapX[temp] = [];
			}

			if (!isInlineList(lineMapX[temp], [y, ey, pid, id])) {
				return [temp, y, ey];
			}
		}
		for (let temp = ex; temp > min; temp -= step) {
			if (!lineMapX[temp]) {
				lineMapX[temp] = [];
			}
			if (!isInlineList(lineMapX[temp], [y, ey, pid, id])) {
				return [temp, y, ey];
			}
		}
		console.log('没有可用的链接点了')// todo 跌代
		return [ex + step, y, ey]


	} else {
		return [ex, y, ey]
	}

}

export function isInline([p1, p2], [p3, p4]) {
	const min1 = Math.min(p1, p2);
	const min2 = Math.min(p3, p4);
	const max1 = Math.max(p1, p2);
	const max2 = Math.max(p3, p4);
	return !(max1 < min2 || max2 < min1);

}

export function isInlineList(list, [p1, p2, pid, id]) {
	debugger
	for (let v of list) {
		if (id === v.id || v.pid === pid ) {
			continue;
		}
		if (isInline([p1, p2], v.line)) {
			return true
		}
	}
	return false
}


