import {Button, Dialog, Flex, TextField, Text, Table, TableBody, Popover, Select, Grid} from '@radix-ui/themes'
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
        <Dialog.Content style={{ position: 'fixed', top: 100, maxWidth: 1080 }}>
          <Dialog.Title>
            {'Cars'}
          </Dialog.Title>
          <Dialog.Description size="2" mb="2">
            {'The following cars have been added to this project.'}
          </Dialog.Description>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>{'Brand'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Model'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Engine Capacity'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Color'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Configuration'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Manufacturing Date'}</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>{'Manufacturer Website'}</Table.ColumnHeaderCell>
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
            <Popover.Root>
              <Popover.Trigger>
                <Button variant="soft">
                  <Pencil1Icon width="16" height="16" />
                  Add New
                </Button>
              </Popover.Trigger>
              <Popover.Content style={{ width: 360 }}>
                <Grid columns="2" gap="3" width="auto">
                  <Text as="div" size="2" mb="1" weight="bold">{'Brand'}</Text>
                  <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="orange">Orange</Select.Item>
                      <Select.Item value="apple">Apple</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <Text as="div" size="2" mb="1" weight="bold">{'Model'}</Text>
                  <Select.Root defaultValue="apple">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="orange">Orange</Select.Item>
                      <Select.Item value="apple">Apple</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <Text as="div" size="2" mb="1" weight="bold">{'Model'}</Text>
                  <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email"/>
                </Grid>

                <Flex gap="3" mt="4" justify="end">
                  <Popover.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Popover.Close>
                  <Popover.Close>
                    <Button>Save</Button>
                  </Popover.Close>
                </Flex>
              </Popover.Content>
            </Popover.Root>
            <Button variant="soft" color="cyan">
              <ResetIcon width="16" height="16" />
              Reset
            </Button>
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
