/**
 * Copyright 2013-2017 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The default is to use a file path string. It implies use of the template method.
 * For any other config an object { file:.., method:.., template:.. } can be used
*/

module.exports = {
    writeFiles
};

function writeFiles() {
    //Oracle JET index file:
    this.copy('ojet/src/index.html', 'src/main/webapp/app/src/index.html');
    //Oracle JET css, font, and image files:
    this.copy('ojet/src/css/fonts/App_iconfont.woff', 'src/main/webapp/app/src/css/fonts/App_iconfont.woff');
    this.copy('ojet/src/css/images/avatar_24px.png', 'src/main/webapp/app/src/css/images/avatar_24px.png');
    this.copy('ojet/src/css/images/avatar_24px_2x.png', 'src/main/webapp/app/src/css/images/avatar_24px_2x.png');
    this.copy('ojet/src/css/images/favicon.ico', 'src/main/webapp/app/src/css/images/favicon.ico');
    this.copy('ojet/src/css/images/oracle_logo.svg', 'src/main/webapp/app/src/css/images/oracle_logo.svg');
    this.copy('ojet/src/css/app.css', 'src/main/webapp/app/src/css/app.css');
    this.copy('ojet/src/css/demo-alta-site-min.css', 'src/main/webapp/app/src/css/demo-alta-site-min.css');
    //Oracle JET sample modules:
    this.copy('ojet/src/js/viewModels/dashboard.js', 'src/main/webapp/app/src/js/viewModels/dashboard.js');
    this.copy('ojet/src/js/viewModels/customers.js', 'src/main/webapp/app/src/js/viewModels/customers.js');
    this.copy('ojet/src/js/viewModels/incidents.js', 'src/main/webapp/app/src/js/viewModels/incidents.js');
    this.copy('ojet/src/js/viewModels/about.js', 'src/main/webapp/app/src/js/viewModels/about.js');
    this.copy('ojet/src/js/views/dashboard.html', 'src/main/webapp/app/src/js/views/dashboard.html');
    this.copy('ojet/src/js/views/customers.html', 'src/main/webapp/app/src/js/views/customers.html');
    this.copy('ojet/src/js/views/incidents.html', 'src/main/webapp/app/src/js/views/incidents.html');
    this.copy('ojet/src/js/views/about.html', 'src/main/webapp/app/src/js/views/about.html');
    //Oracle JET scripts:
    this.copy('ojet/scripts/config/oraclejet-build.js', 'src/main/webapp/app/scripts/config/oraclejet-build.js');
    this.copy('ojet/scripts/config/oraclejet-serve.js', 'src/main/webapp/app/scripts/config/oraclejet-serve.js');
    this.copy('ojet/scripts/hooks/after_build.js', 'src/main/webapp/app/scripts/hooks/after_build.js');
    this.copy('ojet/scripts/hooks/after_serve.js', 'src/main/webapp/app/scripts/hooks/after_serve.js');
    this.copy('ojet/scripts/hooks/before_build.js', 'src/main/webapp/app/scripts/hooks/before_build.js');
    this.copy('ojet/scripts/hooks/before_hybrid_build.js', 'src/main/webapp/app/scripts/hooks/before_hybrid_build.js');
    this.copy('ojet/scripts/hooks/before_release_build.js', 'src/main/webapp/app/scripts/hooks/before_release_build.js');
    this.copy('ojet/scripts/hooks/before_serve.js', 'src/main/webapp/app/scripts/hooks/before_serve.js');
    this.copy('ojet/scripts/hooks/hooks.json', 'src/main/webapp/app/scripts/hooks/hooks.json');
    //Oracle JET bootstrap files:
    this.copy('ojet/src/js/appController.js', 'src/main/webapp/app/src/js/appController.js');
    this.copy('ojet/src/js/main.js', 'src/main/webapp/app/src/js/main.js');
    this.copy('ojet/src/js/path_mapping.json', 'src/main/webapp/app/src/js/path_mapping.json');
    this.copy('ojet/src/index.html', 'src/main/webapp/app/src/index.html');
    //Oracle JET config files:
    this.copy('ojet/Gruntfile.js', 'src/main/webapp/app/Gruntfile.js');
    this.copy('ojet/oraclejetconfig.json', 'src/main/webapp/app/oraclejetconfig.json');
    this.copy('ojet/package-lock.json', 'src/main/webapp/app/package-lock.json');
    this.copy('ojet/package.json', 'src/main/webapp/app/package.json');
}
