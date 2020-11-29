package com.javainuse.springAngular;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "student")
public class StudentContreller {
    @Autowired
  private   StudentRepository studentContreller;

    @PostMapping("/students")
    public void addUser(@RequestBody Student student){
        studentContreller.save(student);
    }

    @GetMapping("/students")
    public List<Student> fingAllUser(){
        return  studentContreller.findAll();
    }


}
