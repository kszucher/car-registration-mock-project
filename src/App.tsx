import {Button, Dialog, Flex, TextField, Text, Inset, Table, TableBody, DialogClose, Tabs, Box, Popover, Avatar, TextArea, Checkbox} from '@radix-ui/themes'
import './App.css'
import '@radix-ui/themes/styles.css'
import {Pencil1Icon, ResetIcon} from "@radix-ui/react-icons"

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 400, height: 300}}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Cars</Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 800 }}>
          <Dialog.Title>{
            'Cars'
          }</Dialog.Title>
          <Dialog.Description size="2" mb="2">
            The following cars have been added to this project.
          </Dialog.Description>

          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>{'Brand'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Model'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Engine Capacity'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Color'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Color'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Color'}</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <TableBody>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
            </TableBody>
          </Table.Root>
          <Flex gap="3" mt="4" justify="end">
            <Button variant="soft" color="cyan">
              <ResetIcon width="16" height="16" />
              Reset
            </Button>
            <Popover.Root>
              <Popover.Trigger>
                <Button variant="soft">
                  <Pencil1Icon width="16" height="16" />
                  Add New
                </Button>
              </Popover.Trigger>
              <Popover.Content style={{ width: 360 }}>
                <Flex gap="3">
                  <Box grow="1">
                    <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                    <Flex gap="3" mt="3" justify="between">
                      <Flex align="center" gap="2" asChild>
                        <Text as="label" size="2">
                          <Checkbox />
                          <Text>Send to group</Text>
                        </Text>
                      </Flex>

                      <Popover.Close>
                        <Button size="1">Comment</Button>
                      </Popover.Close>
                    </Flex>
                  </Box>
                </Flex>
              </Popover.Content>
            </Popover.Root>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default App
