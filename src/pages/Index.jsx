import { useState } from "react";
import { Container, Box, Text, VStack, HStack, Button, IconButton, Input, FormControl, FormLabel, Textarea, Table, Thead, Tbody, Tr, Th, Td, Link, Image } from "@chakra-ui/react";
import { FaHome, FaList, FaDollarSign, FaSignInAlt, FaTachometerAlt, FaSms, FaAddressBook, FaFileAlt, FaChartBar, FaBook, FaCog, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Welcome to Our Service</Text>
            <Text>Discover our features and start using our service today!</Text>
            <HStack spacing={4}>
              <Button colorScheme="teal" onClick={() => setPage("signup")}>
                Sign Up
              </Button>
              <Button colorScheme="teal" variant="outline" onClick={() => setPage("login")}>
                Login
              </Button>
            </HStack>
          </VStack>
        );
      case "features":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Features</Text>
            <Text>Explore the amazing features we offer.</Text>
          </VStack>
        );
      case "pricing":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Pricing</Text>
            <Text>Choose a plan that suits your needs.</Text>
          </VStack>
        );
      case "signup":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Sign Up</Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="teal">Sign Up</Button>
          </VStack>
        );
      case "login":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Login</Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="teal">Login</Button>
          </VStack>
        );
      case "dashboard":
        return (
          <HStack spacing={4} align="flex-start">
            <VStack spacing={4} align="flex-start">
              <Button leftIcon={<FaTachometerAlt />} onClick={() => setPage("overview")}>
                Overview
              </Button>
              <Button leftIcon={<FaSms />} onClick={() => setPage("send-sms")}>
                Send SMS
              </Button>
              <Button leftIcon={<FaAddressBook />} onClick={() => setPage("contacts")}>
                Contacts
              </Button>
              <Button leftIcon={<FaFileAlt />} onClick={() => setPage("templates")}>
                Templates
              </Button>
              <Button leftIcon={<FaChartBar />} onClick={() => setPage("reports")}>
                Reports
              </Button>
              <Button leftIcon={<FaBook />} onClick={() => setPage("api-docs")}>
                API Documentation
              </Button>
              <Button leftIcon={<FaCog />} onClick={() => setPage("account-settings")}>
                Account Settings
              </Button>
              <Button leftIcon={<FaQuestionCircle />} onClick={() => setPage("support")}>
                Support
              </Button>
            </VStack>
            <Box flex="1">{renderDashboardContent()}</Box>
          </HStack>
        );
      default:
        return null;
    }
  };

  const renderDashboardContent = () => {
    switch (page) {
      case "overview":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Dashboard Overview</Text>
            <Text>Quick stats and recent activity.</Text>
          </VStack>
        );
      case "send-sms":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Send SMS</Text>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <FormLabel>Upload Contacts</FormLabel>
              <Input type="file" />
            </FormControl>
            <Button colorScheme="teal">Send</Button>
          </VStack>
        );
      case "contacts":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Contacts</Text>
            <Text>Manage your contacts here.</Text>
          </VStack>
        );
      case "templates":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Templates</Text>
            <Text>Manage your message templates here.</Text>
          </VStack>
        );
      case "reports":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Reports</Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Message</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>2023-10-01</Td>
                  <Td>Delivered</Td>
                  <Td>Hello World</Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
        );
      case "api-docs":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">API Documentation</Text>
            <Text>Learn how to integrate with our API.</Text>
          </VStack>
        );
      case "account-settings":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Account Settings</Text>
            <Text>Manage your account settings here.</Text>
          </VStack>
        );
      case "support":
        return (
          <VStack spacing={4}>
            <Text fontSize="4xl">Support</Text>
            <Text>How can we help you?</Text>
          </VStack>
        );
      default:
        return null;
    }
  };

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <HStack spacing={4} mb={8}>
        <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setPage("home")} />
        <IconButton aria-label="Features" icon={<FaList />} onClick={() => setPage("features")} />
        <IconButton aria-label="Pricing" icon={<FaDollarSign />} onClick={() => setPage("pricing")} />
        <IconButton aria-label="Sign Up / Login" icon={<FaSignInAlt />} onClick={() => setPage("signup")} />
        <IconButton aria-label="Dashboard" icon={<FaTachometerAlt />} onClick={() => setPage("dashboard")} />
      </HStack>
      {renderContent()}
    </Container>
  );
};

export default Index;
