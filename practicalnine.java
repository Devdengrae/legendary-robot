import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/InsertData")
public class InsertData extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    // Database connection parameters
    private static final String URL = "jdbc:mysql://localhost:3306/mydatabase";
    private static final String USER = "username";
    private static final String PASSWORD = "password";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieving data from form
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        // Database connection and insertion
        try {
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            String query = "INSERT INTO users (name, email) VALUES (?, ?)";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setString(1, name);
            ps.setString(2, email);
            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                out.println("<h3>Data inserted successfully!</h3>");
            } else {
                out.println("<h3>Failed to insert data.</h3>");
            }
            conn.close();
        } catch (SQLException e) {
            out.println("<h3>Error: " + e.getMessage() + "</h3>");
        }
    }
}
