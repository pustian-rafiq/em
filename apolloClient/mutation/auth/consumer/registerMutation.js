import { gql, useMutation } from "@apollo/client";

const CONSUMER_REGISTER = gql`
  mutation consumerRegister(
    $first_name: Strings!
    $last_name: Strings!
    $referedBy: String!
    $photo: Upload!
    $country_code: Strings!
    $mobile_no: Strings!
    $gender: Strings!
  ) {
    createConsumer(
      consumerData: {
        firstName: $first_name
        lastName: $last_name
        referedBy: $referedBy
        phone: $mobile_no
        photo: $photo
        country: $country_code
        gender: $gender
        callingCode: "880"
      }
    ) {
      consumer {
        referedBy
        phone
        religion
        username
        fatherName
        motherName
        gender
        fatherNameChange
        motherNameChange
      }
    }
  }
`;

const useConsumerRegisterMutation = () => {
  const [consumerRegisterMutationHandler, { loading, error, data }] =
    useMutation(CONSUMER_REGISTER);

  return { consumerRegisterMutationHandler, loading, error, data };
};

export default useConsumerRegisterMutation;
