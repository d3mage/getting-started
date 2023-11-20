import {
  ChainId,
  createClient,
  Pact,
} from '@kadena/client';
import 'dotenv/config';

const NETWORK_ID = 'fast-development';
const CHAIN_ID = '0' as ChainId;

async function dispatch(): Promise<void> {
  const client = createClient(
    `http://localhost:8080/chainweb/0.0/${NETWORK_ID}/chain/${CHAIN_ID}/pact`,
  );

  const nonce = {int: '325'}
  const sender = '0x6b622d746f6b656e2d726f75746572'
  const destination = '1'
  const recipient = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  const recipient_tm = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  const amount = {decimal: '10.0'} 

  const transaction = Pact.builder
    .execution(Pact.modules['free.verifyspvmock']['dispatch'](nonce, sender, destination, recipient, recipient_tm, amount))
    .setMeta({
      chainId: CHAIN_ID as ChainId,
    })
    .setNetworkId('fast-development')

    const result = await client.local(transaction.createTransaction(), { preflight: false });
    console.log(result.result)
}

async function announce(): Promise<void> {

  const client = createClient(
    `http://localhost:8080/chainweb/0.0/${NETWORK_ID}/chain/${CHAIN_ID}/pact`,
  );

  const storagelocation = "storagelocation"
  const signature = "0x53ba1fb621a19fbae9589c9d3fab7414a4ad75c45ddb6ddaf2e493a8a8ecf0af27256ed4f38b7304e80f653b462a79dcc22bbc975d7ce6f077f1cefe3afedabc1c"

    const transaction = Pact.builder
    .execution(Pact.modules['free.verifyspvmock']['announce'](storagelocation, signature))
    .setMeta({
      chainId: CHAIN_ID as ChainId,
    })
    .setNetworkId('fast-development')

    const result = await client.local(transaction.createTransaction(), { preflight: false });
    console.log(result.result)
}

async function process(): Promise<void> {

  const client = createClient(
    `http://localhost:8080/chainweb/0.0/${NETWORK_ID}/chain/${CHAIN_ID}/pact`,
  );

  const metadata = "0x0000000000000000000000002e234dae75c793f67a35089c9d99245e1c58470b00000000000000000000000000000000000000000000000000000000000000ad0000000f0e1c8be19e9e2bd14665599b8e8ed1f3dbca562788e5844975770eb31380b3ae5de03487e89a1d3c42fad8aac486a06e1af6b3478ec0d148c0c8566c404537291b";
  const encoded_message = "0x01000001450000027200000000000000000000000000000000006b622d746f6b656e2d726f757465720000000100000000000000000000000071c7656ec7ab88b098defb751b7401b5f6d8976f00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000008ac7230489e80000000000000000000000000000000000000000000000000000000000000000002a30783731433736353645433761623838623039386465664237353142373430314235663664383937364600000000000000000000000000000000000000000000";
  const validators = ["0x4BD34992E0994E9d3c53c1CCfe5C2e38d907338e"];
  const threshold = {int: '1'};


    const transaction = Pact.builder
    .execution(Pact.modules['free.verifyspvmock']['process'](metadata, encoded_message, validators, threshold))
    .setMeta({
      chainId: CHAIN_ID as ChainId,
    })
    .setNetworkId('fast-development')

    const result = await client.local(transaction.createTransaction(), { preflight: false });
    console.log(result.result)
}


announce();