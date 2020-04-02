/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const ReloadInstructions = Platform.select({
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd+R</Text> in the simulator to
      reload your app's code.
    </Text>
  ),
  // [TODO(macOS ISS#2323203)
  macos: () => (
    <Text>
      Secondary click in this window and choose{' '}
      <Text style={styles.highlight}>Reload</Text> to reload your app's code.
    </Text>
  ),
  // ]TODO(macOS ISS#2323203)
  default: () => (
    <Text>
      Double tap <Text style={styles.highlight}>R</Text> on your keyboard to
      reload your app's code.
    </Text>
  ),
});

export default ReloadInstructions;
