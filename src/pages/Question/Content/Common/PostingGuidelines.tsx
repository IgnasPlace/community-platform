import { Card, Text, Flex, Heading } from 'theme-ui'
import { ExternalLink } from 'oa-components'

export const PostingGuidelines = () => (
  <Card>
    <Flex sx={{ flexDirection: 'column' }} p={4}>
      <Heading mb={2}>How does it work?</Heading>
      <Text mb={1} variant="auxiliary">
        1. Write your question{' '}
        <span role="img" aria-label="raised-hand">
          🙌
        </span>
      </Text>
      <Text mb={1} variant="auxiliary">
        2. Double check if it's already made and{' '}
        <ExternalLink sx={{ color: 'blue' }} href="/questions">
          search{' '}
        </ExternalLink>
      </Text>
      <Text mb={1} variant="auxiliary">
        3. Provide enough info for people to help{' '}
        <span role="img" aria-label="archive-box">
          🗄️
        </span>
      </Text>
      <Text mb={1} variant="auxiliary">
        4. Add a category and search so others can find it{' '}
        <span role="img" aria-label="writing-hand">
          ✍️
        </span>
      </Text>
      <Text mb={1} variant="auxiliary">
        5. Publish
      </Text>
      <Text mb={1} variant="auxiliary">
        6. Come back to comment the answers
      </Text>
      <Text mb={1} variant="auxiliary">
        7. Get your best answer{' '}
        <span role="img" aria-label="simple-smile">
          🙂
        </span>
      </Text>
    </Flex>
  </Card>
)
