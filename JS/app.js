let serial = 0;

// Triangle
document.getElementById("btn-triangle").addEventListener('click', function () {
    serial += 1;

    const objectName = document.getElementById('triangle-object').innerText;
    const triangleBase = getInputFieldValue('triangle-base');
    const triangleHeight = getInputFieldValue('triangle-height');

    if (isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase < 0 || triangleHeight < 0) {
        alert('Enter Valid Value')
        return;
    }


    const triangleResult = (0.5 * triangleBase * triangleHeight).toFixed(2);

    displayTableData(objectName, triangleResult)
})

// Rectangle
document.getElementById("btn-rectangle").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('rectangle-object').innerText;
    const rectangleWidth = getInputFieldValue('rectangle-width');
    const rectangleLength = getInputFieldValue('rectangle-length');

    if (isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth < 0 || rectangleLength < 0) {
        alert('Enter Valid Value')
        return;
    }


    const rectangleResult = (rectangleWidth * rectangleLength).toFixed(2);
    displayTableData(objectName, rectangleResult)
})

// Parallelogram 
document.getElementById("btn-parallelogram").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('parallelogram-object').innerText;
    const parallelogramBase = getInputFieldValue('parallelogram-base');
    const parallelogramHeight = getInputFieldValue('parallelogram-height');

    if (isNaN(parallelogramBase) || isNaN(parallelogramHeight) || parallelogramBase < 0 || parallelogramHeight < 0) {
        alert('Enter Valid Value')
        return;
    }


    const parallelogramResult = (parallelogramBase * parallelogramHeight).toFixed(2);
    displayTableData(objectName, parallelogramResult)
})

// Rhombus
document.getElementById("btn-rhombus").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('rhombus-object').innerText;
    const rhombusDiagonalOne = getInputFieldValue('rhombus-d1');
    const rhombusDiagonalTwo = getInputFieldValue('rhombus-d2');

    if (isNaN(rhombusDiagonalOne) || isNaN(rhombusDiagonalTwo) || rhombusDiagonalOne < 0 || rhombusDiagonalTwo < 0) {
        alert('Enter Valid Value')
        return;
    }


    const rhombusResult = (0.5 * rhombusDiagonalOne * rhombusDiagonalTwo).toFixed(2);
    displayTableData(objectName, rhombusResult)
})

// Pentagon

document.getElementById("btn-pentagon").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('pentagon-object').innerText;
    const pentagonPerimeter = getInputFieldValue('pentagon-perimeter');
    const pentagonBase = getInputFieldValue('pentagon-base');

    if (isNaN(pentagonPerimeter) || isNaN(pentagonBase) || pentagonPerimeter < 0 || pentagonBase < 0) {
        alert('Enter Valid Value')
        return;
    }


    const pentagonResult = (0.5 * pentagonPerimeter * pentagonBase).toFixed(2);
    displayTableData(objectName, pentagonResult)
})

// Ellipse
document.getElementById("btn-ellipse").addEventListener('click', function () {
    serial += 1;
    const objectName = document.getElementById('ellipse-object').innerText;
    const ellipseA = getInputFieldValue('ellipse-a');
    const ellipseB = getInputFieldValue('ellipse-b');

    if (isNaN(ellipseA) || isNaN(ellipseB) || ellipseA < 0 || ellipseB < 0) {
        alert('Enter Valid Value')
        return;
    }

    const π = 3.14;
    const ellipseResult = (π * ellipseA * ellipseB).toFixed(2);
    displayTableData(objectName, ellipseResult);
})
