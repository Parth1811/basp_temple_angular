/*!

 =========================================================
 * Paper Kit 2 Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify, Auth }  from "aws-amplify";
import aws_exports from "./aws-exports";

if (environment.production) {
  enableProdMode();
  Amplify.configure(aws_exports.prod);
  Auth.configure({oauth: aws_exports.prod.oauth});
} else{
  Amplify.configure(aws_exports.dev);
  Auth.configure({ oauth: aws_exports.dev.oauth });
}

platformBrowserDynamic().bootstrapModule(AppModule);
