import { Fragment } from 'react';
import { Heading } from './ui/heading';
import { Text } from './ui/text';
import { VStack } from './ui/vstack';
import * as Crypto from 'expo-crypto';
import { Pressable } from './ui/pressable';

function ListGroup() {
  let items = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
  ];

  return (
    <>
      <Heading size="lg" className="mx-4 select-none pb-2">
        List Group
      </Heading>
      <VStack className="mx-2 rounded border border-b-0 border-gray-300">
        {items.length === 0 && <Text>No Items</Text>}
        {items.map((item) => (
          <Fragment key={Crypto.randomUUID()}>
            <Text
              key={crypto.randomUUID()}
              onPress={() => console.log('pressed from text element')} // <<< This is throwing an error (comment out and error goes away)
              className="select-none border-b-2 py-2 pl-4 text-orange-500"
            >
              {item}
            </Text>
            {/* <Pressable
              onPress={(event) => {
                console.log(item);
              }}
            >
              <Text
                key={Crypto.randomUUID()}
                className="select-none border-b-2 py-2 pl-4"
              >
                {item}
              </Text>
            </Pressable> */}
            {/* <ReactNativeText
              onPress={() => console.log('pressedReactNative')}
              key={Crypto.randomUUID()}
              className="select-none border-b-2 py-2 pl-4 text-green-500"
            >
              {item}
            </ReactNativeText> */}
          </Fragment>
        ))}
      </VStack>
    </>
  );
}

export default ListGroup;
