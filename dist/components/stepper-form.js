"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperForm = exports.DEFAULT_STEPPER_PROPS = exports.DEFAULT_STEPPER_CLASSES = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var core_1 = require("@mantine/core");
var react_hook_form_1 = require("react-hook-form");
exports.DEFAULT_STEPPER_CLASSES = {
    stepIcon: "\n    relative\n    border-[1px]\n    bg-basic-white\n    border-gray-300\n    z-10\n    mx-3\n    data-[completed=true]:bg-primary-1\n    data-[completed=true]:text-white\n    data-[progress=true]:bg-primary-1\n    data-[progress=true]:text-white\n    data-[progress=true]:before:content-['']\n    data-[progress=true]:before:absolute\n    data-[progress=true]:before:inset-0\n    data-[progress=true]:before:rounded-full\n    data-[progress=true]:before:-z-10\n    data-[progress=true]:before:scale-[1.4]\n    data-[progress=true]:before:border-[1px]\n    data-[progress=true]:before:border-dashed\n    data-[progress=true]:before:border-primary-1\n  ",
    step: "\n    data-[progress=true]:bg-transparent\n    data-[completed=true]:bg-transparent\n  ",
    stepLabel: "font-bold text-[15px] text-gray-600",
    stepDescription: "text-sm text-gray-500",
};
exports.DEFAULT_STEPPER_PROPS = {
    size: "sm",
    classNames: exports.DEFAULT_STEPPER_CLASSES,
};
var StepperForm = function (_a) {
    var steps = _a.steps, onSubmit = _a.onSubmit, _b = _a.stepperProps, stepperProps = _b === void 0 ? exports.DEFAULT_STEPPER_PROPS : _b, icons = _a.icons, header = _a.header, footer = _a.footer, formMethods = _a.formMethods, formOptions = _a.formOptions;
    var _c = (0, react_1.useState)(0), activeStep = _c[0], setActiveStep = _c[1];
    var internalMethods = (0, react_hook_form_1.useForm)(formOptions);
    var methods = formMethods || internalMethods;
    var prevStep = function () {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };
    var isLastStep = activeStep === steps.length - 1;
    var trigger = methods.trigger, clearErrors = methods.clearErrors, handleSubmit = methods.handleSubmit;
    var handleNext = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentStep, stepFields, isValid, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentStep = steps[activeStep];
                    stepFields = currentStep.fields;
                    if (!stepFields) return [3 /*break*/, 2];
                    return [4 /*yield*/, trigger(stepFields)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = true;
                    _b.label = 3;
                case 3:
                    isValid = _a;
                    if (isValid) {
                        clearErrors();
                        setActiveStep(function (prev) { return prev + 1; });
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [activeStep, steps, trigger, clearErrors]);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, __assign({}, methods, { children: (0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit(onSubmit), className: "w-full" }, { children: [header === null || header === void 0 ? void 0 : header({
                    nextStep: handleNext,
                    prevStep: prevStep,
                    isLastStep: isLastStep,
                    activeStep: activeStep,
                    methods: methods,
                }), (0, jsx_runtime_1.jsx)(core_1.Stepper, __assign({ className: "p-10 rounded-xl bg-basic-white shadow-form-sheet", active: activeStep, completedIcon: icons === null || icons === void 0 ? void 0 : icons.completed }, stepperProps, { children: steps.map(function (step, index) { return ((0, jsx_runtime_1.jsx)(core_1.Stepper.Step, __assign({ label: step.label, description: step.description, icon: activeStep === index ? icons === null || icons === void 0 ? void 0 : icons.active : undefined }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-6" }, { children: step.component })) }), index)); }) })), footer === null || footer === void 0 ? void 0 : footer({
                    nextStep: handleNext,
                    prevStep: prevStep,
                    isLastStep: isLastStep,
                    activeStep: activeStep,
                    methods: methods,
                })] })) })));
};
exports.StepperForm = StepperForm;
