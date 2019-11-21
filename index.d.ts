declare module 'react-native-image-gallery' {
  import React from 'react';
  import { View } from 'react-native';
  import PropTypes from 'prop-types';
  import { Gallery as GalleryClass } from './src/Gallery';

  type InferPropTypes<
    PropTypes,
    DefaultProps = {},
    Props = PropTypes.InferProps<PropTypes>
    > = {
      [Key in keyof Props]: Key extends keyof DefaultProps
      ? Props[Key] | DefaultProps[Key]
      : Props[Key]
    };

  type GalleryProps = InferPropTypes<typeof GalleryClass.propTypes, typeof GalleryClass.defaultProps>;
  class Gallery extends React.PureComponent<GalleryProps> { }

  export default Gallery;
}
