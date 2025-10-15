import { View, Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-4xl font-bold">¡Hola Mundo!</Text>
      <Text className="text-white text-lg mt-4">
        Mi primera app con React Native
      </Text>
    </View>
  )
}