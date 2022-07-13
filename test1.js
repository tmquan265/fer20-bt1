//find
const array1 = [1, 3, 5, 7, 9];
Array.prototype.myFind = function (cb1) {
	for (let i = 0; i < this.length; i++) {
		if (cb1(this[i]) === true) return this[i];
	}
};
function run1(zaq) {
	if (zaq > 3) return true;
	return false;
}
console.log(array1.myFind(run1));
//
//
//
//findindex
const array2 = [2, 4, 6, 8, 10];
Array.prototype.myFindindex = function (cb2) {
	for (let i = 0; i < this.length; i++) {
		if (cb2(this[i]) === true) return [i];
	}
};
function run2(zxc) {
	if (zxc > 6) return true;
	return false;
}
console.log(array2.myFindindex(run2));
//
//
//
//some
const array3 = [2, 4, 5, 6, 7, 8];
Array.prototype.mySome = function (cb3) {
	for (let i = 0; i < this.length; i++) {
		if (cb3(this[i]) === true) {
			return true;
		}
	}
};
function run3(asd) {
	if (asd % 3 === 0) return true;
	else return false;
}
console.log(array3.mySome(run3));
//
//
//
//every
const array4 = [11, 22, 33, 44, 55];
Array.prototype.myEvery = function (cb4) {
	for (let i = 0; i < this.length; i++) {
		if (cb4(this[i]) === true) {
			continue;
		} else return false;
	}
	return true;
};
function run4(qwe) {
	if (qwe % 12 === 0) return true;
	else return false;
}
console.log(array4.myEvery(run4));
//
//
//
//Map
const array5 = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (cb5) {
	let ar5 = [];
	for (let i = 0; i < this.length; i++) {
		ar5.push(cb5(this[i]));
	}
	return ar5;
};
function run5(abc) {
	return abc * 3;
}
console.log(array5.myMap(run5));
//
//
//
//filter
const array6 = [1, 2, 3, 4, 5, 6];
Array.prototype.myFilter = function (cb6) {
	let ar6 = [];
	for (let i = 0; i < this.length; i++) {
		if (cb6(this[i]) === true) {
			ar6.push(this[i]);
		}
	}
	return ar6;
};
function run6(cvb) {
	if (cvb > 3) return true;
	return false;
}
console.log(array6.myFilter(run6));
