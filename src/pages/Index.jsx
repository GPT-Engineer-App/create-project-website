import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      description: description,
      tech_stack: "vite",
      llm_name: "gpt-4-turbo",
      use_agent: false,
    };

    try {
      const response = await fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyMzhkZDA0Y2JhYTU4MGIzMDRjODgxZTFjMDA4ZWMyOGZiYmFkZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQW50b24gT3Npa2EiLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQ0NjcwMjU_dj00IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2dwdC1lbmdpbmVlci0zOTA2MDciLCJhdWQiOiJncHQtZW5naW5lZXItMzkwNjA3IiwiYXV0aF90aW1lIjoxNzEzODU2MjUxLCJ1c2VyX2lkIjoiRzFVcVBFWnVER2N5bGdxRUZpRkpCSWVDREF3MiIsInN1YiI6IkcxVXFQRVp1REdjeWxncUVGaUZKQkllQ0RBdzIiLCJpYXQiOjE3MTQ2ODY5NDcsImV4cCI6MTcxNDY5MDU0NywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnaXRodWIuY29tIjpbIjQ0NjcwMjUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn19.U1HwyQdgk-DD_iSbkTrkj6KBEzgnHB0l3YHnTjuglbyxXgFE8w4Y354q0SoAdlziaQYb4STLd1DEndx0ADraKi6nXh5gLz2htxAg8ID3LEfCYSZJ_CISUOiZ3ImiWPKuyAs-BLZJOq2WIEU9HWgazXSvf_NnR6kxgRs8wNSg3oGKMf8OAcsv6nSW2YrS0BUPScMqNEr6NW_rktXCPNYz7i90uFkSd7Bx52XPn5Wn-NxPldPkluBp4X4WTzu4w0C90MJ74HtDmnKOYINqtU4xQO0Eg9aMBNfWOO-1CXPDSIUj3yQlVVL1JUG1_A8Ug1ksYTizjdakGFNOR4Wa0ks9dw",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      toast({
        title: "Project Created",
        description: `Project with description "${description}" was successfully created.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setDescription(""); // Clear the form
    } catch (error) {
      toast({
        title: "Error Creating Project",
        description: error.toString(),
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Box p={5} shadow="md" borderWidth="1px">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="description">Project Description</FormLabel>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe what you want to create..." size="sm" />
          </FormControl>
          <Button mt={4} colorScheme="blue" type="submit" leftIcon={<FaRocket />}>
            Create Project
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
