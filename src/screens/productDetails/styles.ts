import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    alignItems: 'center',
    height: '100%',
  },
  cardImageContainer: {
    flex: 1,
    width: '100%',
    aspectRatio: 0.9,
    height: '100%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  priceContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    color: theme.colors.fontPrimary,
    fontSize: 20,
    paddingTop: 24,
  },
  priceText: {
    color: theme.colors.appPrimary,
    fontWeight: '500',
    fontSize: 24,
    position: 'absolute',
    top: 1,
    right: 1,
    zIndex: 1,
  },
});
