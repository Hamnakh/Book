import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Book/__docusaurus/debug',
    component: ComponentCreator('/Book/__docusaurus/debug', '0fc'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/config',
    component: ComponentCreator('/Book/__docusaurus/debug/config', '939'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/content',
    component: ComponentCreator('/Book/__docusaurus/debug/content', 'e1e'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/globalData',
    component: ComponentCreator('/Book/__docusaurus/debug/globalData', 'aff'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/metadata',
    component: ComponentCreator('/Book/__docusaurus/debug/metadata', '154'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/registry',
    component: ComponentCreator('/Book/__docusaurus/debug/registry', 'eaa'),
    exact: true
  },
  {
    path: '/Book/__docusaurus/debug/routes',
    component: ComponentCreator('/Book/__docusaurus/debug/routes', 'a9b'),
    exact: true
  },
  {
    path: '/Book/docs',
    component: ComponentCreator('/Book/docs', 'ace'),
    routes: [
      {
        path: '/Book/docs',
        component: ComponentCreator('/Book/docs', '370'),
        routes: [
          {
            path: '/Book/docs',
            component: ComponentCreator('/Book/docs', '633'),
            routes: [
              {
                path: '/Book/docs/advanced-ai-control/module-5-advanced-ai',
                component: ComponentCreator('/Book/docs/advanced-ai-control/module-5-advanced-ai', 'eea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/appendix/glossary',
                component: ComponentCreator('/Book/docs/appendix/glossary', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/appendix/references',
                component: ComponentCreator('/Book/docs/appendix/references', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/appendix/resources',
                component: ComponentCreator('/Book/docs/appendix/resources', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/hardware-basics/module-3-hardware',
                component: ComponentCreator('/Book/docs/hardware-basics/module-3-hardware', '977'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/humanoid-design/module-6-humanoid-design',
                component: ComponentCreator('/Book/docs/humanoid-design/module-6-humanoid-design', 'b29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/intro',
                component: ComponentCreator('/Book/docs/intro', 'be5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/introduction/intro',
                component: ComponentCreator('/Book/docs/introduction/intro', '38f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/ros2-foundations/module-1-ros2',
                component: ComponentCreator('/Book/docs/ros2-foundations/module-1-ros2', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/ros2-foundations/ros2-hands-on',
                component: ComponentCreator('/Book/docs/ros2-foundations/ros2-hands-on', 'ed5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/simulation/digital-twins',
                component: ComponentCreator('/Book/docs/simulation/digital-twins', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/simulation/gazebo-unity',
                component: ComponentCreator('/Book/docs/simulation/gazebo-unity', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/simulation/module-2-simulation',
                component: ComponentCreator('/Book/docs/simulation/module-2-simulation', '86a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/vla-systems/module-4-vla-foundations',
                component: ComponentCreator('/Book/docs/vla-systems/module-4-vla-foundations', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/vla-systems/vla-action',
                component: ComponentCreator('/Book/docs/vla-systems/vla-action', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/vla-systems/vla-hands-on-basic',
                component: ComponentCreator('/Book/docs/vla-systems/vla-hands-on-basic', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/vla-systems/vla-language',
                component: ComponentCreator('/Book/docs/vla-systems/vla-language', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Book/docs/vla-systems/vla-vision',
                component: ComponentCreator('/Book/docs/vla-systems/vla-vision', '176'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Book/',
    component: ComponentCreator('/Book/', '3b1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
