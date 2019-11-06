declare module 'react-native-image-gallery' {
  export interface GalleryTypes {
    shouldScrollViewPager(evt: any, gestureState: any): boolean;
    activeViewPagerResponder(evt: any, gestureState: any): void;
    getImageTransformer(page: any): any;
    getCurrentImageTransformer(): any;
    getViewPagerInstance(): any;
    onPageSelected(page: any): void;
    onPageScrollStateChanged(state: any): void;
    renderPage(pageData: any, pageId: any): any;
    resetHistoryImageTransform(): void;
    render(): any;
  }

  const Gallery: GalleryTypes;

  export default Gallery;
}
