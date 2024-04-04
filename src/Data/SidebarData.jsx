import {
  IconAtom,
  IconChartBar,
  IconGardenCart,
  IconCategory,
  IconUserCircle,
  IconMail,
  IconCalendar,
  IconBrandTrello,
  IconBrandHipchat,
  IconNotes,
  IconAddressBook,
  IconPhonePlus,
  IconInvoice,
  IconUserPlus,
  IconSearch,
  IconBrandAppgallery,
  IconTree,
  IconBrandTabler,
  IconCalendarQuestion,
  IconReceipt2,
  IconQuestionMark,
  IconCards,
  IconNeedle,
  IconForms,
  IconInputSearch,
  IconPokeball,
  IconLocationBroken,
  IconPalette,
  IconCalendarDue,
  IconBrandSnapseed,
  IconBorderAll,
  IconDatabaseMinus,
  IconChartPie2,
  IconBoxAlignBottomLeft,
  IconFlag,
  IconGiftCard,
  IconBug,
  IconLogin2
} from '@tabler/icons-react';

const SidebarContent = [
  {
    id: 1,
    name: 'Dashboard',
    items: [
      {
        heading: 'DASHBOARD',
        content: [
          {
            name: 'Dashboard 1',
            icon: <IconAtom />
          },
          {
            name: 'Dashboard 2',
            icon: <IconChartBar />
          }
        ]
      },
      {
        heading: 'APPS',
        content: [
          {
            name: 'Ecommerece',
            icon: <IconGardenCart />
          },
          {
            name: 'Blogs',
            icon: <IconCategory />
          },
          {
            name: 'UserProfile',
            icon: <IconUserCircle />
          },
          {
            name: 'Email',
            icon: <IconMail />
          },
          {
            name: 'Calender',
            icon: <IconCalendar />
          },
          {
            name: 'Kanban',
            icon: <IconBrandTrello />
          },
          {
            name: 'Chats',
            icon: <IconBrandHipchat />
          },
          {
            name: 'Notes',
            icon: <IconNotes />
          },
          {
            name: 'Contact Table',
            icon: <IconAddressBook />
          },
          {
            name: 'Contact List',
            icon: <IconPhonePlus />
          },
          {
            name: 'Invoice',
            icon: <IconInvoice />
          }
        ]
      }
    ]
  }, //FIRST END
  // {
  //   id: 2,
  //   name: 'Landing Page'
  // }, // SECOND END
  {
    id: 2,
    name: 'Pages',
    items: [
      {
        heading: 'PAGES',
        content: [
          {
            name: 'Animation',
            icon: <IconUserPlus />
          },
          {
            name: 'Search Result',
            icon: <IconSearch />
          },
          {
            name: 'Gallery',
            icon: <IconBrandAppgallery />
          },
          {
            name: 'Tree View',
            icon: <IconTree />
          },
          {
            name: 'Block Ui',
            icon: <IconBrandTabler />
          },
          {
            name: 'Session TimeOut',
            icon: <IconCalendarQuestion />
          },
          {
            name: 'Pricing',
            icon: <IconReceipt2 />
          },
          {
            name: 'FAQ',
            icon: <IconQuestionMark />
          },
          {
            name: 'Account Setting',
            icon: <IconReceipt2 />
          },
          {
            name: 'Starter',
            icon: <IconQuestionMark />
          }
        ]
      },
      {
        heading: 'ICONS',
        content: [
          {
            name: 'Tabler Icon',
            icon: <IconBrandAppgallery />
          },
          {
            name: 'Solar Icon',
            icon: <IconInvoice />
          }
        ]
      },
      {
        heading: 'WIDGET',
        content: [
          {
            name: 'Cards',
            icon: <IconCards />
          },
          {
            name: 'Banner',
            icon: <IconUserCircle />
          },
          {
            name: 'Charts',
            icon: <IconChartBar />
          },
          {
            name: 'Feeds',
            icon: <IconNeedle />
          },
          {
            name: 'Apps',
            icon: <IconNeedle />
          },
          {
            name: 'Data',
            icon: <IconReceipt2 />
          }
        ]
      }
    ]
  }, //thIRD END
  {
    id: 3,
    name: 'Forms',
    items: [
      {
        heading: 'Forms',
        content: [
          {
            name: 'Forms Elements',
            icon: <IconForms />
          },
          {
            name: 'Forms Input',
            icon: <IconInputSearch />
          },
          {
            name: 'Forms Wizard',
            icon: <IconForms />
          },
          {
            name: 'Forms Repeater',
            icon: <IconInputSearch />
          }
        ]
      },
      {
        heading: 'ADDONS',
        content: [
          {
            name: 'Drop Zone',
            icon: <IconForms />
          },
          {
            name: 'Form Mask',
            icon: <IconPokeball />
          },
          {
            name: 'Form Typehead',
            icon: <IconForms />
          }
        ]
      },
      {
        heading: 'VALIDATION',
        content: [
          {
            name: 'BT Validation',
            icon: <IconLocationBroken />
          },
          {
            name: 'Custom Validation',
            icon: <IconLocationBroken />
          }
        ]
      },
      {
        heading: 'PICKERS',
        content: [
          {
            name: 'Colorpicker',
            icon: <IconPalette />
          },
          {
            name: 'Date time picker',
            icon: <IconCalendarDue />
          },
          {
            name: 'Rangepicker',
            icon: <IconPalette />
          },
          {
            name: 'BT Datepicker',
            icon: <IconCalendarDue />
          },
          {
            name: 'MT Datepicker',
            icon: <IconCalendarDue />
          }
        ]
      },
      {
        heading: 'EDITORS',
        content: [
          {
            name: 'Quill Editor',
            icon: <IconBrandSnapseed />
          },
          {
            name: 'Tinymce Edtor',
            icon: <IconBrandSnapseed />
          }
        ]
      }
    ]
  }, //FORTH END
  {
    id: 4,
    name: 'Tables',
    items: [
      {
        heading: 'BOOTSTRAP TABLES',
        content: [
          {
            name: 'Basic Table',
            icon: <IconBorderAll />
          },
          {
            name: 'Dark Table',
            icon: <IconBorderAll />
          },
          {
            name: 'Sizing Table',
            icon: <IconBorderAll />
          },
          {
            name: 'Coloured Table',
            icon: <IconBorderAll />
          }
        ]
      },
      {
        heading: 'DATATABLES',
        content: [
          {
            name: 'Basic',
            icon: <IconDatabaseMinus />
          },
          {
            name: 'Api',
            icon: <IconDatabaseMinus />
          },
          {
            name: 'Advanced',
            icon: <IconDatabaseMinus />
          }
        ]
      }
    ]
  }, // fifth end
  {
    id: 5,
    name: 'Charts',
    items: [
      {
        heading: 'CHARTS',
        content: [
          {
            name: 'Line Chart',
            icon: <IconChartPie2 />
          },
          {
            name: 'Area chart',
            icon: <IconChartPie2 />
          },
          {
            name: 'Bar chart',
            icon: <IconChartPie2 />
          },
          {
            name: 'pie chart',
            icon: <IconChartPie2 />
          },
          {
            name: 'redial chart',
            icon: <IconChartPie2 />
          },
          {
            name: 'radar chart',
            icon: <IconChartPie2 />
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Ui components',
    items: [
      {
        heading: 'UI',
        content: [
          {
            name: 'Accordian',
            icon: <IconBoxAlignBottomLeft />
          },
          {
            name: 'Badge',
            icon: <IconBoxAlignBottomLeft />
          },
          {
            name: 'Button',
            icon: <IconBoxAlignBottomLeft />
          },
          {
            name: 'Dropdowns',
            icon: <IconChartPie2 />
          },
          {
            name: 'Modals',
            icon: <IconChartPie2 />
          },
          {
            name: 'Tab',
            icon: <IconBrandSnapseed />
          },
          {
            name: 'Tooltip',
            icon: <IconForms />
          },
          {
            name: 'Notification',
            icon: <IconForms />
          },
          {
            name: 'Progressbar',
            icon: <IconChartBar />
          },
          {
            name: 'Pagination',
            icon: <IconChartBar />
          },
          {
            name: 'Typography',
            icon: <IconForms />
          },
          {
            name: 'Bootstrap UI',
            icon: <IconForms />
          },
          {
            name: 'Breadcrumps',
            icon: <IconBoxAlignBottomLeft />
          },
          {
            name: 'Offcanvas',
            icon: <IconBrandSnapseed />
          },
          {
            name: 'Lists',
            icon: <IconBoxAlignBottomLeft />
          },
          {
            name: 'Grid',
            icon: <IconBrandSnapseed />
          },
          {
            name: 'Carousel',
            icon: <IconBrandSnapseed />
          },
          {
            name: 'Scrollspy',
            icon: <IconReceipt2 />
          },
          {
            name: 'Spinner',
            icon: <IconReceipt2 />
          },
          {
            name: 'Link',
            icon: <IconReceipt2 />
          }
        ]
      }
    ]
  }, //seventh end
  {
    id: 7,
    name: 'Coponents',
    items: [
      {
        heading: 'COMPONENTS',
        content: [
          {
            name: 'Sweet Alert',
            icon: <IconFlag />
          },
          {
            name: 'Nestable',
            icon: <IconFlag />
          },

          {
            name: 'Noui slider',
            icon: <IconFlag />
          },

          {
            name: 'Rating',
            icon: <IconFlag />
          },

          {
            name: 'Toastr',
            icon: <IconFlag />
          }
        ]
      },
      {
        heading: 'CARDS',
        content: [
          {
            name: 'Basic Cards',
            icon: <IconGiftCard />
          },
          {
            name: 'Custom Cards',
            icon: <IconGiftCard />
          },
          {
            name: 'Weather Cards',
            icon: <IconGiftCard />
          },
          {
            name: 'Draggable Cards',
            icon: <IconGiftCard />
          }
        ]
      }
    ]
  }, // end eight
  {
    id: 8,
    name: 'Authentication',
    items: [
      {
        heading: 'AUTH',
        content: [
          {
            name: 'Error',
            icon: <IconBug />
          },
          {
            name: 'Side Login',
            icon: <IconLogin2 />
          },
          {
            name: 'Boxed Login',
            icon: <IconBug />
          },
          {
            name: 'Side Register',
            icon: <IconBug />
          },
          {
            name: 'Boxed Register',
            icon: <IconLogin2 />
          },
          {
            name: 'Side Forgot password',
            icon: <IconLogin2 />
          },
          {
            name: 'Boxed Forgot password',
            icon: <IconBug />
          },
          {
            name: 'Side two Steps',
            icon: <IconBug />
          },
          {
            name: 'Boxed  two Steps',
            icon: <IconFlag />
          },
          {
            name: 'Maintanance',
            icon: <IconFlag />
          }
        ]
      }
    ]
  }, // ninth endd
  {
    id: 9,
    name: 'Docs',
    items: [
      {
        heading: 'DOCUMENTATION',
        content: [
          {
            name: 'Getting Started',
            icon: <IconFlag />
          }
        ]
      },
      {
        heading: 'MULTI LEVEL',
        content: [
          {
            name: 'Menu Level',
            icon: <IconFlag />
          }
        ]
      },
      {
        heading: 'MORE OPTIONS',
        content: [
          {
            name: 'Applications',
            icon: <IconFlag />
          },
          {
            name: 'Form Options',
            icon: <IconFlag />
          },
          {
            name: 'Table Variations',
            icon: <IconFlag />
          },
          {
            name: 'Charts Selection',
            icon: <IconFlag />
          },
          {
            name: 'Widgets',
            icon: <IconFlag />
          }
        ]
      }
    ]
  }
];

export default SidebarContent;
