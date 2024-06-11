import { store, updateStorage } from "../store";
import {toHidden, toShow} from "../util";

const $currentAssetInput = document.querySelector('.current-asset-input');
const $currentAssetValue = document.querySelector('.current-asset-value');
const $currentAssetButton = document.querySelector('.current-asset-button');
const $addItemButton = document.querySelector('.add-item-button');

export function initCurrentAsset(){
    renderCurrentAsset();
    addCurrentAssetEventListener();
}

function addCurrentAssetEventListener() {

}

export function renderCurrentAsset() {
    $currentAssetValue.textContent = store.currentFunds?.toLocaleString() ?? "-";
    $currentAssetInput.value = store.currentFunds;
}