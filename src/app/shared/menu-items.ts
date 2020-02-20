export interface RouteNode {
  name: string;
  icon?: string;
  route?: string;
  seperator?: boolean;
  children?: RouteNode[];
}

export const MENU_ITEMS: RouteNode[] = [
  {
    name: "General",
    seperator: true
  },
  {
    name: "Dashboard",
    icon: "speed",
    route: "/dashboard/home"
  },
  {
    name: "Material UI",
    icon: "style",
    children: [
      { name: "Badge", route: "/dashboard/material-ui/badge" },
      { name: "Buttons", route: "/dashboard/material-ui/buttons" },
      { name: "Cards", route: "/dashboard/material-ui/cards" },
      { name: "Grid List", route: "/dashboard/material-ui/grid-list" },
      { name: "Lists", route: "/dashboard/material-ui/lists" },
      { name: "Menu", route: "/dashboard/material-ui/menu" },
      { name: "Tabs", route: "/dashboard/material-ui/tabs" },
      { name: "Stepper", route: "/dashboard/material-ui/stepper" },
      { name: "Ripples", route: "/dashboard/material-ui/ripples" },
      {
        name: "Expansion Panel",
        route: "/dashboard/material-ui/expansion-panel"
      },
      { name: "Chips", route: "/dashboard/material-ui/chips" },
      { name: "Toolbar", route: "/dashboard/material-ui/toolbar" },
      {
        name: "Progress Bar",
        route: "/dashboard/material-ui/progress-bar"
      },
      {
        name: "Progress Spinner",
        route: "/dashboard/material-ui/progress-spinner"
      },
      { name: "Dialog", route: "/dashboard/material-ui/dialog" },
      { name: "Tooltip", route: "/dashboard/material-ui/tooltip" },
      { name: "Snackbar", route: "/dashboard/material-ui/snackbar" },
      { name: "Slider", route: "/dashboard/material-ui/slider" },
      { name: "Slide Toggle", route: "/dashboard/material-ui/slide-toggle" }
    ]
  },
  {
    name: "Apps",
    icon: "apps",
    children: [
      { name: "Calendar", route: "/dashboard/apps/calendar" },
      { name: "Mailbox", route: "/dashboard/apps/mailbox" },
      { name: "Chat", route: "/dashboard/apps/chat" },
      { name: "Taskboard", route: "/dashboard/apps/taskboard" },
      { name: "Contact", route: "/dashboard/apps/contact" },
      { name: "Product List", route: "/dashboard/apps/product-list" },
      { name: "Product Details", route: "/dashboard/apps/product-details" }
    ]
  },
  {
    name: "Forms, Table & Widgets",
    seperator: true
  },
  {
    name: "Forms",
    icon: "format_align_center",
    children: [
      { name: "Form Layout", route: "/dashboard/forms/formlayout" },
      { name: "Autocomplete", route: "/dashboard/forms/autocomplete" },
      { name: "Checkbox", route: "/dashboard/forms/checkbox" },
      { name: "Radio Button", route: "/dashboard/forms/radiobutton" },
      { name: "Datepicker", route: "/dashboard/forms/datepicker" },
      { name: "Select", route: "/dashboard/forms/select" },
      { name: "Form Field", route: "/dashboard/forms/formfield" },
      { name: "Inputs", route: "/dashboard/forms/inputs" },
      { name: "Tree", route: "/dashboard/forms/tree" },
      { name: "Editor", route: "/dashboard/forms/editor" },
      { name: "Form Validation", route: "/dashboard/forms/formvalidation" },
      { name: "File Upload", route: "/dashboard/forms/fileupload" },
      { name: "Wizard", route: "/dashboard/forms/wizard" },
      { name: "Paginator", route: "/dashboard/forms/paginator" },
      { name: "Sort Header", route: "/dashboard/forms/sortheader" }
    ]
  },
  {
    name: "Tables",
    icon: "table_chart",
    children: [
      { name: "Basic Table", route: "/dashboard/tables/basictable" },
      { name: "Filterable Table", route: "/dashboard/tables/filterabletable" },
      { name: "Pagination Table", route: "/dashboard/tables/paginationtable" },
      { name: "Sortable Table", route: "/dashboard/tables/sortabletable" },
      { name: "Mix Table", route: "/dashboard/tables/mixtable" }
    ]
  },
  {
    name: "Data Tables",
    icon: "web",
    children: [
      { name: "Basic Data Table", route: "/dashboard/data-tables/basictable" },
      { name: "Filterable", route: "/dashboard/data-tables/filterable" },
      { name: "Editing", route: "/dashboard/data-tables/editing" },
      { name: "Material Table", route: "/dashboard/data-tables/materialtable" }
    ]
  },
  {
    name: "Widgets",
    icon: "assessment",
    route: "/dashboard/widgets"
  },
  {
    name: "Extra Component",
    seperator: true
  },
  {
    name: "Authentication",
    icon: "perm_contact_calendar",
    children: [
      { name: "Login", route: "/dashboard/home" },
      { name: "Register", route: "/dashboard/home" },
      { name: "Forgot", route: "/dashboard/home" },
      { name: "Lockscreen", route: "/dashboard/home" },
      { name: "Error", route: "/dashboard/home" }
    ]
  },
  {
    name: "Charts",
    icon: "bar_chart",
    children: [
      { name: "Chart Js", route: "/dashboard/home" },
      { name: "Chartist Js", route: "/dashboard/home" },
      { name: "Ngx Charts", route: "/dashboard/home" }
    ]
  },
  {
    name: "Pages",
    icon: "note",
    children: [
      { name: "Timeline", route: "/dashboard/home" },
      { name: "Invoice", route: "/dashboard/home" },
      { name: "Pricing", route: "/dashboard/home" },
      { name: "Helper Classes", route: "/dashboard/home" },
      { name: "Icons", route: "/dashboard/home" }
    ]
  }
];
