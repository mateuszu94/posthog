import { SDKKey } from '~/types'
import {
    JSWebInstructions,
    ProductAnalyticsAPIInstructions,
    ProductAnalyticsAndroidInstructions,
    ProductAnalyticsElixirInstructions,
    ProductAnalyticsFlutterInstructions,
    ProductAnalyticsGoInstructions,
    ProductAnalyticsIOSInstructions,
    ProductAnalyticsNodeInstructions,
    ProductAnalyticsPHPInstructions,
    ProductAnalyticsPythonInstructions,
    ProductAnalyticsRNInstructions,
    ProductAnalyticsRubyInstructions,
} from '.'

export const ProductAnalyticsSDKInstructions = {
    [SDKKey.JS_WEB]: JSWebInstructions,
    // add next, getsby, and others here
    [SDKKey.IOS]: ProductAnalyticsIOSInstructions,
    [SDKKey.REACT_NATIVE]: ProductAnalyticsRNInstructions,
    [SDKKey.ANDROID]: ProductAnalyticsAndroidInstructions,
    [SDKKey.FLUTTER]: ProductAnalyticsFlutterInstructions,
    [SDKKey.NODE_JS]: ProductAnalyticsNodeInstructions,
    [SDKKey.PYTHON]: ProductAnalyticsPythonInstructions,
    [SDKKey.RUBY]: ProductAnalyticsRubyInstructions,
    [SDKKey.PHP]: ProductAnalyticsPHPInstructions,
    [SDKKey.GO]: ProductAnalyticsGoInstructions,
    [SDKKey.ELIXIR]: ProductAnalyticsElixirInstructions,
    [SDKKey.API]: ProductAnalyticsAPIInstructions,
}
