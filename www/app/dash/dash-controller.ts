/// <reference path="../_app.ts" />

module app.controllers {

    export class DashCtrl {
        public scannedInfo: string;

        constructor(
            private $cordovaBarcodeScanner: BarcodeScanner
        ){
            // do stuff
            this.scannedInfo = "Nothing currently.";
        }

        public scan(): void {
            this.scannedInfo = "";

            this.$cordovaBarcodeScanner.scan()
                .then((result: BarcodeScannerResult) => {
                    this.scannedInfo = JSON.stringify(result, null, 2);
                    console.log(result);
                    console.log(this.scannedInfo);
                },
                (error: any) => {
                    console.log(error);
                });
        }
    }
}