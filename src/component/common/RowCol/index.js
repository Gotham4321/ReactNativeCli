import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({children, style, m, mt, mb, ml, mr, p, pt, pb, pl, pr}) => {
  const margin = m ? m * 8 : undefined;
  const marginTop = mt ? mt * 8 : undefined;
  const marginBottom = mb ? mb * 8 : undefined;
  const marginLeft = ml ? ml * 8 : undefined;
  const marginRight = mr ? mr * 8 : undefined;
  const padding = p ? p * 8 : undefined;
  const paddingTop = pt ? pt * 8 : undefined;
  const paddingBottom = pb ? pb * 8 : undefined;
  const paddingLeft = pl ? pl * 8 : undefined;
  const paddingRight = pr ? pr * 8 : undefined;

  return (
    <View
      style={[
        styles.row,
        {
          margin,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          padding,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const Column = ({
  children,
  style,
  xs,
  sm,
  md,
  lg,
  xl,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
}) => {
  const getColumnSize = size => {
    if (size <= 0) {
      return '0%';
    } else if (size > 12) {
      return '100%';
    } else {
      const percent = (size / 12) * 100;
      return `${percent}%`;
    }
  };

  const margin = m ? m * 8 : undefined;
  const marginTop = mt ? mt * 8 : undefined;
  const marginBottom = mb ? mb * 8 : undefined;
  const marginLeft = ml ? ml * 8 : undefined;
  const marginRight = mr ? mr * 8 : undefined;
  const padding = p ? p * 8 : undefined;
  const paddingTop = pt ? pt * 8 : undefined;
  const paddingBottom = pb ? pb * 8 : undefined;
  const paddingLeft = pl ? pl * 8 : undefined;
  const paddingRight = pr ? pr * 8 : undefined;

  return (
    <View
      style={[
        styles.column,
        {flexBasis: getColumnSize(xs)},
        {flexGrow: 1, flexShrink: 1, flexBasis: getColumnSize(sm)},
        {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: getColumnSize(md),
          maxWidth: getColumnSize(md),
        },
        {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: getColumnSize(lg),
          maxWidth: getColumnSize(lg),
        },
        {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: getColumnSize(xl),
          maxWidth: getColumnSize(xl),
        },
        {
          margin,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          padding,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  column: {
    paddingHorizontal: 10,
  },
});

export {Row, Column};
