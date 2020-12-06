gdjs.mainCode = {};
gdjs.mainCode.GDsightObjects1= [];
gdjs.mainCode.GDsightObjects2= [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDgangster1Objects1= [];
gdjs.mainCode.GDgangster1Objects2= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};
gdjs.mainCode.conditionTrue_1 = {val:false};
gdjs.mainCode.condition0IsTrue_1 = {val:false};
gdjs.mainCode.condition1IsTrue_1 = {val:false};
gdjs.mainCode.condition2IsTrue_1 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.mainCode.GDgangster1Objects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.mainCode.GDsightObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.mainCode.GDgangster1Objects1});gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.mainCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.mainCode.GDsightObjects1);
{for(var i = 0, len = gdjs.mainCode.GDsightObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDsightObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.mainCode.GDsightObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDsightObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "gangster");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDgangster1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDgangster1Objects1Objects, 100, 368, "");
}{for(var i = 0, len = gdjs.mainCode.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDgangster1Objects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gangster");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.mainCode.GDgangster1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.mainCode.GDsightObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
{gdjs.mainCode.conditionTrue_1 = gdjs.mainCode.condition1IsTrue_0;
gdjs.mainCode.condition0IsTrue_1.val = false;
gdjs.mainCode.condition1IsTrue_1.val = false;
{
gdjs.mainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDsightObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDgangster1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.mainCode.condition0IsTrue_1.val ) {
{
gdjs.mainCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}}
gdjs.mainCode.conditionTrue_1.val = true && gdjs.mainCode.condition0IsTrue_1.val && gdjs.mainCode.condition1IsTrue_1.val;
}
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDgangster1Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDgangster1Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
{gdjs.mainCode.conditionTrue_1 = gdjs.mainCode.condition1IsTrue_0;
gdjs.mainCode.condition0IsTrue_1.val = false;
{
gdjs.mainCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}gdjs.mainCode.conditionTrue_1.val = true && gdjs.mainCode.condition0IsTrue_1.val;
}
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-vyistrel-iz-makarova-7743.mp3", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
{gdjs.mainCode.conditionTrue_1 = gdjs.mainCode.condition1IsTrue_0;
gdjs.mainCode.condition0IsTrue_1.val = false;
{
gdjs.mainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}gdjs.mainCode.conditionTrue_1.val = true && gdjs.mainCode.condition0IsTrue_1.val;
}
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-schelchkov-pistoleta-kogda-konchilis-patronyi-7750.mp3", false, 100, 1);
}}

}


{


{
}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDsightObjects1.length = 0;
gdjs.mainCode.GDsightObjects2.length = 0;
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDgangster1Objects1.length = 0;
gdjs.mainCode.GDgangster1Objects2.length = 0;

gdjs.mainCode.eventsList1(runtimeScene);
return;

}

gdjs['mainCode'] = gdjs.mainCode;
