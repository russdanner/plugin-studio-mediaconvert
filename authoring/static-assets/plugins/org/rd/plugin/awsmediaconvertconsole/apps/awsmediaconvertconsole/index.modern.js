var { useEffect, useState, createElement, Fragment } = craftercms.libs.React;
var { Dialog, DialogTitle, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } = craftercms.libs.MaterialUI;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ReactComponent = function (_a) {
    useEffect(function () {
        dataLoadJobs();
        var intervalRef = setInterval(function () {
            dataLoadJobs();
        }, 10000);
        return function () {
            clearInterval(intervalRef);
        };
    }, []);
    var dataLoadJobs = function () {
        // @ts-ignore
        var siteId = craftercms.getStore().getState().sites.active;
        // @ts-ignore
        var serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/awsmediaconvertconsole/mediaconvertconsole/list.json'
            + '?siteId=' + siteId;
        // @ts-ignore
        CrafterCMSNext.util.ajax.get(serviceUrl).subscribe(function (response) {
            setState(__assign(__assign({}, state), { jobs: response.response.result.jobs }));
        });
    };
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState({
        jobs: []
    }), state = _c[0], setState = _c[1];
    return (createElement(Fragment, null,
        createElement("div", { onClick: function () { return setOpen(true); }, className: "MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters", style: {
                WebkitTapHighlightColor: 'transparent',
                backgroundColor: 'transparent',
                outline: '0px',
                border: '0px',
                margin: '0px',
                borderRadius: '0px',
                cursor: 'pointer',
                userSelect: 'none',
                verticalAlign: 'middle',
                appearance: 'none',
                color: 'inherit',
                display: 'flex',
                WebkitBoxFlex: 1,
                flexGrow: 1,
                WebkitBoxPack: 'start',
                justifyContent: 'flex-start',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                minWidth: '0px',
                boxSizing: 'border-box',
                textAlign: 'left',
                padding: '8px 16px',
                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            } },
            createElement("div", { className: "MuiListItemIcon-root", style: {
                    color: 'rgb(255, 255, 255)',
                    flexShrink: 0,
                    display: 'inline-flex',
                    marginRight: '10px',
                    minWidth: 'auto'
                } },
                createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "DashboardRoundedIcon" },
                    createElement("path", { d: "M17 21.5H4a2 2 0 01-2-2v-10a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2zM21 11.5v6l4.445 2.964A1 1 0 0027 19.631V9.369a1 1 0 00-1.555-.832L21 11.5z" }))),
            createElement("div", { className: "MuiListItemText-root mui-1tsvksn" },
                createElement("span", { className: "MuiTypography-root MuiTypography-body1 MuiTypography-noWrap MuiListItemText-primary css-typdpm" }, "AWS MediaConvert Console")),
            createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "ChevronRightRoundedIcon" },
                createElement("path", { d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" })),
            createElement("span", { className: "MuiTouchRipple-root css-w0pj6f" })),
        createElement(Dialog, { fullWidth: true, maxWidth: 'xl', onClose: function () { return setOpen(false); }, "aria-labelledby": "simple-dialog-title", open: open },
            createElement(DialogTitle, { id: "max-width-dialog-title" }, "AWS MediaConvert Jobs"),
            createElement(TableContainer, { component: Paper },
                createElement(Table, { sx: { minWidth: 650 }, "aria-label": "simple table" },
                    createElement(TableHead, null,
                        createElement(TableRow, null,
                            createElement(TableCell, null, "ID"),
                            createElement(TableCell, { align: "right" }, "Input"),
                            createElement(TableCell, { align: "right" }, "Started"),
                            createElement(TableCell, { align: "right" }, "Status"),
                            createElement(TableCell, { align: "right" }, "% Complete"))),
                    createElement(TableBody, null, state.jobs && Object.entries(state.jobs).map(function (_a) {
                        var jobIdx = _a[0];
                        var job = state.jobs[jobIdx];
                        // @ts-ignore
                        return (createElement(TableRow, { key: job.id, sx: { '&:last-child td, &:last-child th': { border: 0 } } },
                            createElement(TableCell, { align: "left" },
                                createElement("b", null, job.id)),
                            createElement(TableCell, { align: "right" }, job.settings.inputs[0].fileInput),
                            createElement(TableCell, { align: "right" }, job.createdAt),
                            createElement(TableCell, { align: "right" }, job.status),
                            createElement(TableCell, { align: "right" }, job.jobPercentComplete)));
                    })))))));
};

var plugin /*: PluginDescriptor */ = {
    id: 'org.rd.plugin.awsmediaconvertconsole',
    name: 'Sample component library',
    description: 'An example plugin of a component library',
    author: 'Russ Danner',
    logo: null,
    locales: {},
    apps: [],
    widgets: {
        'org.rd.plugin.awsmediaconvertconsole.components.reactComponent': ReactComponent
    },
    scripts: [],
    stylesheets: [],
    themes: []
};

export default plugin;
