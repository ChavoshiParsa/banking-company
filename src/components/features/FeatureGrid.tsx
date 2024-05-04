import FeatureItem from './FeatureItem'

export default function FeatureGrid() {
  return (
    <div className='grid w-full flex-grow grid-cols-2 gap-5'>
      <FeatureItem
        title='24/7 Account Access'
        info='Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'
      />
      <FeatureItem
        title='Mobile Banking App'
        info='Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'
      />
      <FeatureItem
        title='Secure Transactions'
        info='Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'
      />
      <FeatureItem
        title='Bill Pay and Transfers'
        info='Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'
      />
    </div>
  )
}
