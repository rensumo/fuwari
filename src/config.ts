import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 替换为第二个文件的 siteConfig（保留第一个文件的 toc 配置，避免功能缺失）
export const siteConfig: SiteConfig = {
  title: 'AcoFork Blog',
  subtitle: '爱你所爱！',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 355,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'https://eo-r2.2x.nz/myblog/img/222.webp',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: { // 保留第一个文件的 toc 配置，确保文章目录功能正常
    enable: true, 
    depth: 2, 
  },
  favicon: [    // Leave this array empty to use the default favicon
     {
       src: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2973517380&spec=5',    // Path of the favicon, relative to the /public directory
       //theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       sizes: '128x128',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     }
  ]
};

// 替换为第二个文件的 navBarConfig
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.主页,
    LinkPreset.Archive,
    LinkPreset.关于,
    {
      name: '随机图',
      url: 'https://pic.onani.cn',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
};

// 替换为第二个文件的 profileConfig
export const profileConfig: ProfileConfig = {
  avatar: 'https://eo-r2.2x.nz/myblog/img/111.webp',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '二叉树树',
  bio: 'Protect What You Love./爱你所爱！',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/afoim',
    },
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'https://qm.qq.com/q/Uy9kmDXHYO',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:email@example.com',
    },
  ],
};

// 替换为第二个文件的 licenseConfig
export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
};

// 保留第一个文件的 expressiveCodeConfig（解决主题配置错误的关键）
export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
