/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/ARTNodeManager.h>

#import <React/ARTNode.h>

@implementation ARTNodeManager

RCT_EXPORT_MODULE()

- (ARTNode *)node
{
  return [ARTNode new];
}

- (RCTUIView *)view // TODO(macOS ISS#3536887)
{
  return [self node];
}

- (RCTShadowView *)shadowView
{
  return nil;
}

RCT_EXPORT_VIEW_PROPERTY(opacity, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(transform, CGAffineTransform)

@end
