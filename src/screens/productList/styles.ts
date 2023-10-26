import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    margin: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    alignItems: 'center',
  },
  searchCard: {
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: theme.colors.appPrimary,
    borderWidth: 0.5,
  },
  searchInputStyle: {
    color: theme.colors.appPrimary,
  },
  cardImageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
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
    fontWeight: '700',
  },
  priceText: {
    color: theme.colors.appPrimary,
    fontWeight: '500',
    fontSize: 18,
  },
  activityIndicator: {
    flex: 1,
  },
});
