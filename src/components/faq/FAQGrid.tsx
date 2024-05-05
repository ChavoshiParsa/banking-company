import FAQItem from './FAQItem'
import ArrowDown from '/public/icons/ArrowDown.svg'

export default function FAQGrid() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative grid grid-cols-2 gap-5'>
        <FAQItem
          question='How do I open an account with YourBank?'
          answer='Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
        />
        <FAQItem
          question='What documents do I need to provide to apply for a loan?'
          answer="The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
        />
        <FAQItem
          question='How can I access my accounts online?'
          answer="Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."
        />
        <FAQItem
          question='Are my transactions and personal information secure?'
          answer='At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.'
        />
        <div className='absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-shade-grey-10 pt-48' />
      </div>
      <button className='flex justify-center space-x-1 self-center rounded-full border border-shade-grey-15 bg-shade-grey-11 px-5 py-3.5 text-sm'>
        <span>Load All FAQ&apos;s</span>
        <ArrowDown />
      </button>
    </div>
  )
}
