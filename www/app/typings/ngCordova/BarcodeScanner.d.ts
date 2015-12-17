/// <reference path="../angularjs/angular.d.ts" />

interface BarcodeScannerResult {
    text: string;
    format: string;
    cancelled: boolean;
}

interface BarcodeScanner {
    scan(): ng.IPromise<BarcodeScannerResult>;
    encode(
        type: string,
        text: string
    ): ng.IPromise<any>;
}