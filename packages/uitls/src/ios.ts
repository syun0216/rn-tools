import { Dimensions, Platform } from 'react-native';

export const deviceWidthDp: number = Dimensions.get('window').width;
export const deviceHeightDp: number = Dimensions.get('window').height;
export const iPhoneXBottom: number = 34;
export const iPhoneXTop: number = 44;
export const iPhoneTop: number = 20;

// x xs 11pro
const iPhoneX_WIDTH: number = 375;
const iPhoneX_HEIGHT: number = 812;

// xr xsMax 11 proMax
const XR_WIDTH: number = 414;
const XR_HEIGHT: number = 896;

// x xs 11pro
export function isIphoneX(): boolean {
  return (
    Platform.OS === 'ios' &&
    ((deviceHeightDp === iPhoneX_HEIGHT && deviceWidthDp === iPhoneX_WIDTH) ||
      (deviceHeightDp === iPhoneX_WIDTH && deviceWidthDp === iPhoneX_HEIGHT))
  );
}

// xr xsMax 11 proMax
export function isIphoneXr(): boolean {
  return (
    Platform.OS === 'ios' &&
    ((deviceHeightDp === XR_HEIGHT && deviceWidthDp === XR_WIDTH) ||
      (deviceHeightDp === XR_WIDTH && deviceWidthDp === XR_HEIGHT))
  );
}

// 是否为iPhone X以上机型
export function isIphoneXAboveModel(): boolean {
  return isIphoneX() || isIphoneXr();
}
