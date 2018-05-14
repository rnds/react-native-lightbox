import { DeviceInfo, NativeModules, Platform } from 'react-native';

export const IMAGE_PRESS_EVENT_NAME = 'imagePress';

// Ideally we'd use SafeAreaView for iPhone X support, but it's not available
// on all versions and causes a jump after initial render
export const SAFE_INSET_TOP =
  Platform.OS === 'ios' ? (DeviceInfo.isIPhoneX_deprecated ? 44 : 20) : 0;

export const SUPPORTS_NATIVE_ANIMATION_DRIVER =
  NativeModules && !!NativeModules.NativeAnimatedModule;
