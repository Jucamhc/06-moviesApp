import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeSreen = () => {
  const {} = useMovies();
  return (
    <View>
      <Text>HomeScreem</Text>
    </View>
  );
};
