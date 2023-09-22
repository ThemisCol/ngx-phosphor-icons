<img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# ngx-phosphor-icons

Phosphor is a flexible icon family for interfaces, diagrams, presentations, buttons — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

**ngx-phosphor-icons** It is designed to be used together with [@angular/Material](https://material.angular.io/) since it seeks to integrate the Phosphor icons into [@angular/material/icon](https://material.angular.io/components/icon/api), allowing it to be used in an easy and orderly way.

<ul>
  <li>1,248 icons and counting</li>
  <li>6 weights: Thin, Light, Regular, Bold, Fill, and Duotone</li>
  <li>Raw stroke information retained to fine-tune the style</li>
</ul>

## Installation

```bash
npm install --save ngx-phosphor-icons
```

## Imports

There are two ways of implementation, choose the one you like best.

#### Module Import (1)

Simply import the **NgxPhosphorIconsModule** into the AppModule so that the entire project can use the icons, or into the module you require. **(This module has all types of icons)**.

```tsx
import { AppComponent } from 'app/app.component';
...
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      NgxPhosphorIconsModule, // Phosphor Icon Pack
      MatIconModule, // It is important to import the Icon material module.
    ]
  })
export class AppModule {}
```

#### Other Modules (Optional).

You can choose the type of icon of your choice, if you only want to load the package.

|  Module | Weight  | Example | View |
|---|---|---|---|
| NgxPhosphorIconsBoldModule  | Bold | ```<mat-icon svgIcon="ph-bold:name_icon"></mat-icon>``` | <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Bold.png" width="120" align="center" /> |
| NgxPhosphorIconsDuotoneModule | Duotone |  ```<mat-icon svgIcon="ph-duotone:name_icon"></mat-icon>``` | <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Duotone.png" width="120" align="center" />  |
| NgxPhosphorIconsFillModule | Fill  |  ```<mat-icon svgIcon="ph-fill:name_icon"></mat-icon>``` |  <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Fill.png" width="120" align="center" /> |
| NgxPhosphorIconsLightModule  | Light |  ```<mat-icon svgIcon="ph-light:name_icon"></mat-icon>``` | <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Light.png" width="120" align="center" />  |
| NgxPhosphorIconsRegularModule  | Regular |  ```<mat-icon svgIcon="ph-regular:name_icon"></mat-icon>``` | <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Regular.png" width="120" align="center" /> |
| NgxPhosphorIconsThinModule  | Thin  |  ```<mat-icon svgIcon="ph-thin:name_icon"></mat-icon>``` | <img src="https://github.com/ThemisCol/ngx-phosphor-icons/raw/main/projects/ngx-phosphor-icons/meta/Thin.png" width="120" align="center" />  |


#### Module File Import (2)

This form of import has the same characteristics, only that the file is consulted when starting the **angular.json**. The Modules Change Name and include the **"File"** Label

In the **"input"** path: You can specify only one import file if you want or leave it like this to import everything

```tsx
"assets": [
      "src/assets", 
      ...,
      {
          "glob": "**/*",
          "input": "node_modules/ngx-phosphor-icons/icons/", // Here
          "output": "./assets/icons/"
      }
  ],
```                    
##### Module List
<ul>
  <li>NgxPhosphorIconsFileModule (All).</li>
  <li>NgxPhosphorIconsBoldFileModule (Bold).</li>
  <li>NgxPhosphorIconsDuotoneFileModule (Duotone).</li>
  <li>NgxPhosphorIconsLightFileModule (Light).</li>
  <li>NgxPhosphorIconsRegularFileModule (Regular).</li>
  <li>NgxPhosphorIconsFillFileModule (Fill).</li>
  <li>NgxPhosphorIconsThinFileModule (Thin).</li>
</ul>

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more.

The properties are defined by Angular and [@angular/material/icon](https://material.angular.io/components/icon/api)

### Usage

In the [phosphoricons.com](https://phosphoricons.com). documentation the icon calling is done as follows.

```tsx 
<i class="ph-bold ph-graduation-cap"></i>
```

In this implementation the **width** type and icon name are called

```tsx 
"ph-bold:graduation-cap"
```

You can use the icons in different ways, please read the [@angular/Material](https://material.angular.io/) documentation.


##### Decorative icons
When the icon is purely cosmetic and conveys no real semantic meaning, the ```<mat-icon>``` element is marked with ```aria-hidden="true"```.

##### Interactive icons
Icons alone are not interactive elements for screen-reader users; when the user would interact with some icon on the page, a more appropriate element should "own" the interaction:

The ```<mat-icon>``` element should be a child of a ```<button>``` or ```<a>``` element.
The parent ```<button>``` or ```<a>``` should either have a meaningful label provided either through direct text content, ```aria-label```, or ```aria-labelledby```.

```tsx

  // Icon
  <mat-icon svgIcon="ph-bold:airplane"></mat-icon>
  <mat-icon svgIcon="ph-duotone:airplane"></mat-icon>
  <mat-icon svgIcon="ph-fill:airplane"></mat-icon>
  <mat-icon svgIcon="ph-light:airplane"></mat-icon>
  <mat-icon svgIcon="ph-regular:airplane"></mat-icon>
  <mat-icon svgIcon="ph-thin:airplane"></mat-icon>

  // Button
  <button  mat-icon-button color="warn" type="button">
    <mat-icon svgIcon="ph-bold:trash"></mat-icon>
  </button>
  ...
```


## Our Related Projects

- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [wireui/phosphoricons](https://github.com/wireui/phosphoricons) ▲ Phosphor icons for Laravel
- [phosphor-css](https://github.com/lucagoslar/phosphor-css) ▲ CSS wrapper for Phosphor SVG icons
- [ruby-phosphor-icons](https://github.com/maful/ruby-phosphor-icons) ▲ Phosphor icons for Ruby and Rails applications
- [eleventy-plugin-phosphoricons](https://github.com/reatlat/eleventy-plugin-phosphoricons) ▲ An Eleventy plugin for add shortcode, allows Phosphor icons to be embedded as inline svg into templates
## LICENSE

This project is licensed under the [MIT License](LICENSE.md).
